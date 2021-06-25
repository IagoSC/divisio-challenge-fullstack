import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    id: Int!
    name: String!
  }

  type Query {
   getPokemons: [Pokemon]
  }
`
