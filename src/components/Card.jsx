import React from "react";

function Card() {
    return (
        <>
            <div className="card">
                <div className="card__info">
                    <p>#001</p>
                    <h2>Charmander</h2>
                    <div className="card__type">
                        <p>Fire</p>
                    </div>

                </div>
                <div className="card__img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Card;