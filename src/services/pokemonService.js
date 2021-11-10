import { idText } from 'typescript';
import HttpService from './httpService';

export const fetchPokemons = () => {

  const http = new HttpService();

  const url = '/';

  return http.getData(url);

};

export const getPokemon = (id) => {

  const http = new HttpService();

  const url = `/${id}`;

  return http.getData(url);

};