import { useLocation, useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const location = useLocation()
    const { name } = useParams()
    const searchParams = new URLSearchParams(location.search)
    const image = searchParams.get('image')

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="pokemon" />
        </div>
    )
}

export default PokemonDetail
