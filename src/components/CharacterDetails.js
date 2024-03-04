import { useParams } from "react-router-dom"

const CharacterDetails = () => {
    const { id } = useParams()
//find character with matchin id
    

    return (
        <div>
            <h1> Character Details</h1>
            <p>Name: { id.name}</p>
            <img src = {id.image} alt={id.name} />

            <p>Gender: {id.gender}</p>

            <p>Status: {id.status}</p>
        </div>
    )
}

export default CharacterDetails