import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

const DetailsList = () => {
    const [details, setDetails] = useState([])
    //useeffect hook to fetch data from API - arowfunction to fetch
    useEffect(() => {
        const FetchDetails = async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                setDetails(response.data.results)
            } catch (error) {
                console.error('Error Fetching Details')
            }
        }
        FetchDetails()
    }, [])


    return(
        <div>
            {details.map((detail) => {
                return(
                    <div key={detail.id}>
                        <Link to={`/details/${detail.id}`}>Click for details</Link>
                    </div>
                );
            })}
        </div>
    )
}
export default DetailsList