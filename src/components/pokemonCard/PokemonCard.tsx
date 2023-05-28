import { FC } from 'react'
import { PokemonCardInterface } from './interface/PokemonCard.interface'
import { Link } from 'react-router-dom'

const PokemonCard: FC<PokemonCardInterface> = ({ name, image }) => {
    return (
        <div style={{ marginBottom: '10px', border: '2px solid #000', width: '150px' }}>
            <Link to={`/pokemon/${name}?image=${encodeURIComponent(image)}`}>{name}</Link>
            <img src={image} alt="pokemon" />
        </div>
    )
}

export default PokemonCard
