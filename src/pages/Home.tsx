import React from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

const Home: React.FC = () => {
  const blogPosts = [
    {
      title: 'It\'s finally set up!',
      content: 'I did this as a quick project to test Vite, and it works beautifully!',
    }
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <Header />
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Home;
