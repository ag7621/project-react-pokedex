import React from "react";

function Pokeinfo() {
    return (
        <>
            <h3>Charmander</h3>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
            <div className="abilities">
                <div>
                    <p>blaze</p>
                </div>
                <div>
                    <p>solar-power</p>
                </div>
            </div>
            <div className="base-stat">
                <p>HP:30</p>
                <p>attack:52</p>
                <p>defense: 43</p>
                <p>special-attack: 50</p>
                <p>speed</p>
            </div>
        </>
    )
}

export default Pokeinfo;