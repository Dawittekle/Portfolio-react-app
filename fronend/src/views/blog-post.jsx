import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../lib/loadPosts';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = () => {
      setLoading(true);
      const currentPost = getPostById(id);
      setPost(currentPost);
      setLoading(false);
    };

    loadPost();

    // Hot reload handler
    if (process.env.NODE_ENV === 'development') {
      const handler = () => loadPost();
      window.addEventListener('postUpdated', handler);
      return () => window.removeEventListener('postUpdated', handler);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-2xl mx-auto py-8 px-4">
      <img 
        src={post.heroImage} 
        alt={post.title}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="flex gap-4 mt-2 text-gray-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
        </div>
        <div className="flex gap-2 mt-2">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-100 px-2 py-1 text-sm rounded">
              #{tag}
            </span>
          ))}
        </div>
      </header>
      <ReactMarkdown className="prose lg:prose-xl">
        {post.content}
      </ReactMarkdown>
    </article>
  );
}