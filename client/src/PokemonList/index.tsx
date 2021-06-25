import React from 'react'
import { Pokemon } from '../common/types'

interface Props {
  data: Pokemon[]
}

const PokemonList = (props: Props) => {
  const { data } = props

  return (
    <ul>
      {data.map((poke) => (
        <li key={poke.id}>{poke.name}</li>
      ))}
    </ul>
  )
}

export default PokemonList
