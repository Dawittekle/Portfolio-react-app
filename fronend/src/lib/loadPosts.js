import posts from '../posts.json';

let cachedPosts = null;

export function getAllPosts() {
  if (!cachedPosts) {
    try {
      cachedPosts = Object.values(posts);
    } catch (error) {
      console.error('Error loading posts:', error);
      cachedPosts = [];
    }
  }
  return cachedPosts;
}

export function getPostById(id) {
  try {
    return posts[id] || null;
  } catch (error) {
    console.error(`Error loading post ${id}:`, error);
    return null;
  }
}

// Hot reload support (for development)
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('../posts.json', () => {
      cachedPosts = null;
      console.log('🔥 Posts updated!');
    });
  }
}