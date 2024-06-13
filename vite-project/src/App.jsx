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
.catch(error => setError(error.message));
}, []);
if (error) {
  return {error}
}
return (
  <div>
    <h1>Post</h1>
    <ul>
{posts.map(post => (
<li key={post.id}>
  <h2>{post.title}</h2>
  <p>{post.body}</p>
</li>
))}
</ul>

  </div>
);
}

export default App