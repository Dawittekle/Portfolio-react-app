const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../src/posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

for (const postId in posts) {
  const post = posts[postId];
  if (post.content) {
    // Split content into lines, remove empty lines, and trim
    const lines = post.content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
    // Join the first two lines for the description
    post.description = lines.slice(0, 2).join(' ');
  }
}

fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');
console.log('Descriptions added to posts.json!');