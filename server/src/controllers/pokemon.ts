import { RESTDataSource } from 'apollo-datasource-rest';

class PokemonController extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getAllPokemons(limit: number, offset: number) {
    const allPokemons = this.get(`pokemon?limit=${limit}&offset=${offset}`);
    return allPokemons;
  }

  async getPokemon(url: string){
    return this.get(url);
  }
}

const pokemonController = new PokemonController();

export default pokemonController; 
