import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';
import './bloglatest.css';
import { getLatestPosts } from '../../lib/loadPosts';

const Bloglatest = () => {
  const latestPosts = getLatestPosts(3); // Always gets 3 latest posts

  return (
    <div className="bloglatest-layout223 thq-section-padding">
      <div className="bloglatest-max-width thq-flex-row thq-section-max-width">
        <div className="bloglatest-container thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="bloglatest-list thq-flex-column">
            {latestPosts.map((post, index) => (
              <BlogItem
                key={post.id}
                imageAlt={post.imageAlt || `Post ${index + 1}`}
                imageSrc={post.imageSrc || post.heroImage}
                title={post.title}
                date={post.date}
                isFeatured={index === 0} // First post gets featured styling
                link={`/blog/${post.id}`}
              />
            ))}
          </div>
          <div className="thq-flex-row bloglatest-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Bloglatest;