import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../lib/loadPosts';
import './BlogPost.css'; // Your styling

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPostData = async () => {
      try {
        setLoading(true);
        const postData = getPostById(id);
        
        if (!postData) {
          throw new Error('Post not found');
        }

        // Ensure required fields exist
        const processedPost = {
          ...postData,
          contentHtml: postData.contentHtml || '', // Fallback if using markdown
          heroImage: postData.heroImage || '/default-post-image.jpg'
        };

        setPost(processedPost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPostData();
  }, [id]);

  if (loading) return <div className="blog-page loading">Loading post...</div>;
  if (error) return <div className="blog-page error">Error: {error}</div>;
  if (!post) return <div className="blog-page not-found">Post not found</div>;

  return (
    <div className="blog-page">
      <div className="post-container">
        {/* Back button */}
        <Link to="/blog" className="back-button">
          ← Back to Blog
        </Link>
        
        {/* Hero image */}
        {post.heroImage && (
          <img
            src={post.heroImage}
            alt={post.title}
            className="post-hero-image"
          />
        )}
        
        {/* Post header */}
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-category">{post.category}</span>
          </div>
          <div className="post-tags">
            {post.tags?.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </header>
        
        {/* Post content */}
        <div 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </div>
    </div>
  );
}