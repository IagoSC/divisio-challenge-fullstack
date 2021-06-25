import pokemonController from "controllers/pokemon"

export default {
  Query: {
    getPokemons: async (_, args) => {
      return  await pokemonController.getAllPokemons(args.limit, args.offset);
    }
  },
}
 