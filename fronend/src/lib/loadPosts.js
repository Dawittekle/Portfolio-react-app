import postsData from "../posts.json";

let cachedPosts = null;

// Helper function to safely parse dates
const safeDateSort = (a, b) => {
  try {
    return new Date(b.date) - new Date(a.date);
  } catch (e) {
    return 0; // Fallback if date parsing fails
  }
};

export function getAllPosts() {
  if (!cachedPosts) {
    try {
      // Create a new array to avoid modifying the original
      cachedPosts = Object.values(postsData).map((post) => ({ ...post }));
      cachedPosts.sort(safeDateSort); // Sort by date
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
    return post ? { ...post } : null; // Return a copy
  } catch (error) {
    console.error(`Error loading post ${id}:`, error);
    return null;
  }
}

export function getLatestPosts(count = 3) {
  try {
    const allPosts = getAllPosts(); // Uses cached and sorted posts
    return allPosts.slice(0, count);
  } catch (error) {
    console.error("Error getting latest posts:", error);
    return [];
  }
}

// Development hot reload
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("../posts.json", () => {
      cachedPosts = null; // Reset cache
      console.log("🔥 Posts updated - cache cleared");
    });
  }
}

export function getPostsByCategory(category) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}
