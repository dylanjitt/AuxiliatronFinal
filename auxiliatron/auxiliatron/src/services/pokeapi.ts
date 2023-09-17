import axios from 'axios'


const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';
export const pokeAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // cambia esta URL por tu API
  timeout:10000,
  headers:{
    'Content-Type':'application/json'
    //agragar otros encabezados si es necesario
  },
});
