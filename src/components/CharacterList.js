import React, { useState, useEffect } from 'react';
import axios from 'axios';
//wrap each character in a div/button
//define a listening event (on-click)
//When a character is clicked, update the state with the selected character and pass it to the CharacterDetails component.
import CharacterDetails from './CharacterDetails';

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [selectCharacter, setSelectedCharacter] = useState(null)
    //useeffect hook to fetch data from API - arowfunction to fetch
    useEffect(() => {
        const FetchCharacters = async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                setCharacters(response.data.results)
            } catch (error) {
                console.error('Error Fetching Characters')
            }
        }
        FetchCharacters()
    }, [])//[empty list to prevent recurssion]


    const handleCharacterOnClick = (character) => {
        setSelectedCharacter(character)
    }
// Render CharacterDetails conditionally only when a character is selected to avoid an infinite loop of re-rendering state function
    return (
        <div className='container'>
            <h1>Rick And Morty Characters</h1>
            <div className='character-grid'>
                {
                    characters.map((character) => (
                        // dont invoke the function directly; have a function reference
                        //wrap in a button to click and show details
                        <button key= {character.id} className='character-card' onClick={() => handleCharacterOnClick(character)}>
                            <h2>{character.name}</h2>
                        </button>
                        )
                    )
                }
            </div>
        {selectCharacter && <CharacterDetails character={selectCharacter}/>}
        </div>
    )
}
export default CharacterList

// {selectedCharacter && ...} evaluates if selectedcharacter is true,null,false/an empty string
//character = prop name
//<CharacterDetails character={selectedCharacter} /> rendered if line49 is true; renders characterdetails component and passes the selectcharacter object as 'character' (propname)