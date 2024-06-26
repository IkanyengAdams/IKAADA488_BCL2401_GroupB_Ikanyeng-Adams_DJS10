import { useEffect, useState } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
})
.then(data => setPosts(data))
.catch(error => setError("Data fetch failed"));
}, []);
if (error) {
  return <div><strong style={{ fontSize: '24px' }}>{error}</strong></div>
}
return (
  <div>
    <h1>Post</h1>
    <div>
{posts.map((post, index) => (
<dd key={post.id}>
  <h2>{index + 1}. {post.title}</h2>
  <p>{post.body}</p>
</dd>
))}
</div>

  </div>
);
}

export default App