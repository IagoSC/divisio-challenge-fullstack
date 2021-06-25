import { GlobalStyle } from './style-guide/GlobalStyle'
import PokemonList from './PokemonList'
import * as S from './styles'
import { GET_POKEMONS } from 'config/apollo-client'
import { useQuery } from '@apollo/client'

const array = [
  { name: 'Bulbassaur', id: 1 },
  { name: 'Ivyssaur', id: 2 },
  { name: 'Venossaur', id: 3 }
]

const App = () => {
  const { loading, data } = useQuery(GET_POKEMONS)

  return (
    <>
      <GlobalStyle />
      <S.Container>
        {loading && <p>Loading...</p>}
        <PokemonList data={data || array} />
      </S.Container>
    </>
  )
}

export default App
