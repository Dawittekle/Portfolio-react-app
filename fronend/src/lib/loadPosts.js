import postsData from "../posts.json";

let cachedPosts = null;

const safeDateSort = (a, b) => {
  try {
    return new Date(b.date) - new Date(a.date);
  } catch (e) {
    return 0;
  }
};

export function getAllPosts() {
  if (!cachedPosts) {
    try {
      cachedPosts = Object.values(postsData);
      cachedPosts.sort(safeDateSort);
    } catch (error) {
      console.error("Error loading posts:", error);
      cachedPosts = [];
    }
  }
  return cachedPosts;
}

export function getPostById(id) {
  try {
    const post = postsData[id];
    if (!post) return null;
    return { ...post };
  } catch (error) {
    console.error(`Error loading post ${id}:`, error);
    return null;
  }
}

export function getLatestPosts(count = 3) {
  try {
    const allPosts = getAllPosts();
    return allPosts.slice(0, count);
  } catch (error) {
    console.error("Error getting latest posts:", error);
    return [];
  }
}

export function getPostsByCategory(category) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}