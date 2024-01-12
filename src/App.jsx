import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mon, setMon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMon(data.results);
        console.log(mon)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className='container'>
        {mon.map((pokemon) => {
          return (
            <div>{pokemon.name}</div>
          )
        })}
      </div>
    </>
  )
}

export default App
