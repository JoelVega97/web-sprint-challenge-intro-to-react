import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CharacterMaker from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starterpokeData, setStarterPokeData] = useState()
  const [legendaryPokeData, setLegendaryPokeData] = useState('')

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
      .then(function(res){
          setStarterPokeData(res.data.results)
      })
      .catch(function(err){
        console.log('OOF')
      })
    }, [])

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon?limit=8&offset=143')
    .then(function(res){
      setLegendaryPokeData(res.data.results)
    })
    .catch(function(err){
      console.log('UHOH')
    })
  }, [starterpokeData])

  return (
    <div className="App">
      <CharacterMaker starters = {starterpokeData} legends = {legendaryPokeData} />
    </div>
  );
}

export default App;
