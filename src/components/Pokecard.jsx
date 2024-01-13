import { react, useState } from 'react'

function Pokecard({ name, id }) {
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default Pokecard