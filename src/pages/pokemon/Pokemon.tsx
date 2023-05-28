import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import PokemonCard from '@/components/pokemonCard/PokemonCard'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [offset, setOffset] = useState(0)

    // Function for fetching the pokemons
    const fetchPokemonList = (fetchLimit: number) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${fetchLimit}`)
            .then((response) => {
                const pokemonPromises = response.data.results.map((pokemon: object) => axios.get(pokemon.url))

                axios
                    .all(pokemonPromises)
                    .then((pokemonDetails) => {
                        const pokemons = pokemonDetails.map((response: object) => {
                            const { name, sprites } = response.data
                            const image = sprites.front_default
                            return { name, image }
                        })

                        setPokemonList((prevList: Array<object>) => [...prevList, ...pokemons])
                        setOffset((prevOffset: number) => prevOffset + fetchLimit)
                    })
                    .catch((error) => {
                        console.error('Error fetching Pokémon details:', error)
                    })
            })
            .catch((error) => {
                console.error('Error fetching Pokémon list:', error)
            })
    }

    useEffect(() => {
        fetchPokemonList(10)
    }, [])

    // Function for rendering the pokemons
    const renderPokemons = () => {
        return pokemonList.map((pokemon, index) => {
            return <PokemonCard name={pokemon.name} image={pokemon.image} key={index} />
        })
    }

    return (
        <div>
            {pokemonList.length === 0 ? 'Loading...' : renderPokemons()}
            <Button variant="contained" color="primary" onClick={() => fetchPokemonList(10)}>
                Load 10 more
            </Button>
        </div>
    )
}

export default PokemonList
