import { idText } from 'typescript';
import HttpService from './httpService';

export const fetchPokemons = () => {

  const http = new HttpService();

  const url = '/pokemon';

  return http.getData(url);

};

export const getPokemon = (id) => {

  const http = new HttpService();

  const url = `/pokemon/${id}`;

  return http.getData(url);

};