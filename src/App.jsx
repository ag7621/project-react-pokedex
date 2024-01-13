import { useState, useEffect } from 'react'
import './App.css'
import Pokecard from './components/Pokecard';

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
        {mon.map((pokemon, i) => {
          return (
            <div>
              <Pokecard name={pokemon.name} id={i + 1} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
