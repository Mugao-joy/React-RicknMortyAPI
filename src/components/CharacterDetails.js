import React from "react"
//import CharacterList from "./CharacterList";
//import character from './CharacterList'
//use params for this and link character id


function CharacterDetails ({character}) {
    if (!character) {
        return null
    }

    return(
        <div>
            <h1> Character Details</h1>
            <p>Name: { character.name}</p>
            <img src = {character.image} alt={character.name} />

            <p>Gender: {character.gender}</p>

            <p>Status: {character.status}</p>
        </div>
        )
}

export default CharacterDetails