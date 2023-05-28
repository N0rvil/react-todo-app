import { IRoute } from '@/router/routes/routePublic'
import PokemonDetail from '@/pages/PokemonDetail/PokemonDetail'

export const routePokemonCardPage: IRoute[] = [{ path: '/pokemon/:name', element: PokemonDetail }]
