import { Card, Row, Col } from 'react-bootstrap';

const PokeDexDisplay = ({ pokemonData, search }) => {
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <Row>
      {filteredPokemonData.map((pokemon) => (
        <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            border='light'
            className='text-dark mb-3 shadow p-1 bg-body-tertiary border border-2'
          >
            <Card.Img variant='top' src={pokemon.img} alt={pokemon.name} className='px-4 pt-2' />
            <Card.Body>
              <Card.Title className='text-uppercase fw-bold'>
                <span className='text-danger'> {pokemon.num} </span>
                {pokemon.name}
              </Card.Title>
              <Card.Text className='m-0'>
                <span className='text-secondary'>Type(s): </span>
                {pokemon.type.map((t, index) => (
                  <span key={t}>
                    {t}
                    {index === pokemon.type.length - 1 ? '' : ', '}
                  </span>
                ))}
              </Card.Text>
              <Card.Text className='m-0'>
                <span className='text-secondary'>Weakness(es): </span>
                {pokemon.weaknesses.map((weakness, index) => (
                  <span key={weakness}>
                    {weakness}
                    {index === pokemon.weaknesses.length - 1 ? '' : ', '}
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PokeDexDisplay;
