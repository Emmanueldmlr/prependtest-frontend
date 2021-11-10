import HttpService from './httpService';

export const fetchPokemons = (params) => {

  const http = new HttpService();

  const url = params ? `?${params}`: '/';

  return http.getData(url);

};

export const getPokemon = (id) => {

  const http = new HttpService();

  const url = `/${id}`;

  return http.getData(url);

};