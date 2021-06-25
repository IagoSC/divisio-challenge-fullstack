import pokemonController from "controllers/pokemon"

export default {
  Query: {
    pokemons: async (_, args) => {
      return  await pokemonController.getAllPokemons(args.limit, args.offset);
    }
  },
}
 