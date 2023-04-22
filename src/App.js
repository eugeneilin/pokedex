import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import AdvancedSearch from './components/AdvancedSearch.jsx';
import PokeDexDisplay from './components/PokeDexDisplay';
import './global.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all-types');
  const [weaknessFilter, setWeaknessFilter] = useState('all-weaknesses');

  // Fetching data from API
  const fetchData = async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    );
    const data = await res.json();
    setPokemonData(data.pokemon);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData().then(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  const filteredPokemonData = pokemonData.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().startsWith(search.toLowerCase());
    const typeMatch = typeFilter === 'all-types' || pokemon.type.includes(typeFilter);
    const weaknessMatch =
      weaknessFilter === 'all-weaknesses' || pokemon.weaknesses.includes(weaknessFilter);
    return nameMatch && typeMatch && weaknessMatch;
  });

  return (
    <>
      <Container>
        <h1 className='text-center text-uppercase my-4 fw-bold'>PokeDex</h1>
        <AdvancedSearch
          pokemonData={pokemonData}
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          weaknessFilter={weaknessFilter}
          setWeaknessFilter={setWeaknessFilter}
          filteredPokemonData={filteredPokemonData}
        />
        <hr />
        {isLoading ? (
          <div className='d-flex justify-content-center'>
            <Spinner animation='border' role='status' variant='light'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          <PokeDexDisplay filteredPokemonData={filteredPokemonData} />
        )}
      </Container>
    </>
  );
};

export default App;
