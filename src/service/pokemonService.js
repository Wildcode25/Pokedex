import axios from "axios";
import { baseUrl } from "../utils/const";
export class PokemonService {
  static async getAllPokemons() {
    let nextUrl=baseUrl
    const allPokemons = [];

    while (nextUrl) {
      const {results, next} = await this.getPokemons(nextUrl);
      
      allPokemons.push(...results);
      nextUrl = next;
    }
    return allPokemons;
  }
  static async getPokemons(url){
    const response = await axios.get(url);
    const data = response.data;
    const promises = data.results.map((result)=>{
        return axios.get(result.url).then(response=>response.data)
    })
    return Promise.all(promises).then(results=>{
        data.results=results
        return data
    })
    
  }
  static getPokemonTypes = () => {
    const promise = axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => response.data);
    return promise;
  };
}
