import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

function App() {
  const [selectCharacter, setSelectedCharacter] = useState([null])//initial state value; when a new character is selected handle character updates

  const handleCharacter = (character) => {
    setSelectedCharacter(character)
  }

  return(
    <div>
      <h1> Rick and Morty Characters</h1>
      <div style = {{ display: 'flex'}}>
        <div style = {{ flex: '1'}}>
          <CharacterList onCharacterSelect= {handleCharacter}/>
        </div>
        <div style={{ flex: '1'}}>{selectCharacter && <CharacterDetails character={selectCharacter} />}
        </div>
      </div>
    </div>
  )
}

export default App