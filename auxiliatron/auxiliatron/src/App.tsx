import { useEffect, useState } from "react";
import "./App.css"
import SubjectCard from './components/SubjectCard';
import {pokeAPI} from './services/pokeapi'


function App() {

  const [pokemon,setPokemon]=useState(null);
  const [click,setClick]=useState(false);
  useEffect(()=> {
    pokeAPI.get('/pokemon/charmander')
    .then(response=>{
      debugger;
      setPokemon(response.data);
    })
    .catch(error=>{
      console.error('Error fetching data: ',error);
    });
  },[click]);

  const clicked = () => {
    console.log('haciendo click');
    setClick(!click);
  }

  return (
    <SubjectCard/>
  )
}

export default App
