const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const chokidar = require('chokidar');

const postsDir = path.join(__dirname, '../src/posts');
const outputFile = path.join(__dirname, '../src/posts.json');

const convertPosts = () => {
  try {
    const files = fs.readdirSync(postsDir);
    const posts = {};

    files.forEach(file => {
      if (file.endsWith('.md')) {
        const id = file.replace(/\.md$/, '');
        const fullPath = path.join(postsDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        posts[id] = {
          id,
          content,
          ...data
        };
      }
    });

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log('✅ Markdown files converted to JSON');
  } catch (error) {
    console.error('Error converting markdown files:', error);
  }
};

// Run immediately
convertPosts();

// Watch for changes if --watch flag is present
if (process.argv.includes('--watch')) {
  const watcher = chokidar.watch(postsDir, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  });

  watcher
    .on('add', (path) => {
      console.log(`📄 New file detected: ${path}`);
      convertPosts();
    })
    .on('change', (path) => {
      console.log(`✏️ File changed: ${path}`);
      convertPosts();
    })
    .on('unlink', (path) => {
      console.log(`🗑️ File removed: ${path}`);
      convertPosts();
    });

  console.log('👀 Watching for markdown changes...');
}