import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Front End Part</h1>
      <h2>JOKES : {jokes.length}</h2>

      {
        jokes.map((jokeItem, index) => (
          <div key={jokeItem.id}>
            <h3>{jokeItem.title}</h3>
            <p>{jokeItem.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
