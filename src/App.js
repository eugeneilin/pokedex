import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AdvancedSearch from './components/AdvancedSearch.jsx';
import PokeDexDisplay from './components/PokeDexDisplay';
import './global.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState('');

  console.log(search);

  // Fetching data from API
  const fetchData = async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    );
    const data = await res.json();
    setPokemonData(data.pokemon);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <div className='text-center text-uppercase'>
          <h1 className='my-4 fw-bold text-black'>PokeDex</h1>
          <p className='mt-2 fs-4'>Advanced Search Options</p>
        </div>
        <AdvancedSearch pokemonData={pokemonData} search={search} setSearch={setSearch} />
        <hr />
        <PokeDexDisplay pokemonData={pokemonData} search={search} />
      </Container>
    </>
  );
};

export default App;
