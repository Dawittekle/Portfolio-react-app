const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const chokidar = require('chokidar')

const sources = [
  {
    dir: path.join(__dirname, '../src/posts'),
    out: path.join(__dirname, '../src/posts.json')
  },
  {
    dir: path.join(__dirname, '../src/projects'),
    out: path.join(__dirname, '../src/projects.json')
  }
]

function getDescription (content, wordCount = 50) {
  const words = content
    .replace(/\n/g, ' ')
    .split(' ')
    .filter(word => word.trim().length > 0)
  return (
    words.slice(0, wordCount).join(' ') +
    (words.length > wordCount ? '...' : '')
  )
}

function convertMarkdown ({ dir, out }) {
  try {
    const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []
    const items = {}

    files.forEach(file => {
      if (file.endsWith('.md')) {
        const id = file.replace(/\.md$/, '')
        const fullPath = path.join(dir, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        items[id] = {
          id,
          content,
          description: getDescription(content, 20),
          ...data
        }
      }
    })

    fs.writeFileSync(out, JSON.stringify(items, null, 2))
    console.log(`✅ Converted markdown in ${dir} to ${out}`)
  } catch (error) {
    console.error(`Error converting markdown in ${dir}:`, error)
  }
}

function convertAll () {
  sources.forEach(convertMarkdown)
}

// Run immediately
convertAll()

// Watch for changes if --watch flag is present
if (process.argv.includes('--watch')) {
  sources.forEach(({ dir }) => {
    const watcher = chokidar.watch(dir, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true
    })

    watcher
      .on('add', path => {
        console.log(`📄 New file detected: ${path}`)
        convertAll()
      })
      .on('change', path => {
        console.log(`✏️ File changed: ${path}`)
        convertAll()
      })
      .on('unlink', path => {
        console.log(`🗑️ File removed: ${path}`)
        convertAll()
      })

    console.log(`👀 Watching for markdown changes in ${dir}...`)
  })
}
