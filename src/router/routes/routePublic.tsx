import { FC } from 'react'
import Dashboard from '@/pages/dashboard/Dashboard'
import Pokemon from '@/pages/pokemon/Pokemon'
import PokemonDetail from '@/pages/PokemonDetail/PokemonDetail'

export interface IRoute {
    path: string
    element: FC
}

export const routePublic: IRoute[] = [
    { path: '/', element: Dashboard },
    { path: 'pokemon', element: Pokemon },
    { path: 'pokemon/:name', element: PokemonDetail },
]
