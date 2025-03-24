"use client"; // This makes it a Client Component

const FetchDataComponent = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
