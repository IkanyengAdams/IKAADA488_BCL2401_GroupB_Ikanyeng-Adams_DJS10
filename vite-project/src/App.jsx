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
}