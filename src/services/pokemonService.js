import HttpService from './httpService';

export const fetchPokemons = (params) => {

  const http = new HttpService();

  const url = params ? `?${params}`: '/';

  return http.getData(url);

};

export const getPokemon = (name) => {

  const http = new HttpService();

  const url = `/${name}`;

  return http.getData(url);

};