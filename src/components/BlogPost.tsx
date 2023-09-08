import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
  return (
    <article className="bg-white shadow-lg p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
