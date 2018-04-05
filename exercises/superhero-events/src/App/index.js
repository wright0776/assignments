import React from 'react'
import data from "./superheroes.json";
import Superhero from "./Superhero";

function App() {

    function handleclick(e,catchphrase) {
        e.preventDefault();
        alert(catchphrase)
    }

    return (
        <div>
            <h1>Superheroes &darr;</h1>
            {data.superheroes.map(hero => <Superhero hero = {hero} key = {hero.name} handleclick={handleclick}/>)}
        </div>
    )
}

export default App;