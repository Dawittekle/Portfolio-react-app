import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setContent(content);
        setData(data);
      });
  }, [slug]);

  return (
    <div>
      <img src={data.cover} alt="cover" style={{ width: '100%' }} />
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <p>Category: {data.category}</p>
      <p>Tags: {data.tags?.join(', ')}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
      <div id="giscus-container" />
    </div>
  );
}

export default BlogPost;
