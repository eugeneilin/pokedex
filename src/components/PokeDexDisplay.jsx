import { Card, Row, Col } from 'react-bootstrap';

const PokeDexDisplay = ({ filteredPokemonData }) => {
  return (
    <main>
      <Row className='align-items-stretch'>
        {filteredPokemonData.length === 0 ? (
          <Col className='text-center'>
            <h4>No Pokemon Found</h4>
          </Col>
        ) : (
          filteredPokemonData.map((pokemon, idx) => (
            <Col key={pokemon + idx} xs={12} sm={6} md={4} lg={3}>
              <Card
                border='light'
                className='text-dark mb-3 shadow p-1 bg-body-tertiary border border-2 h-100'
              >
                <Card.Img
                  variant='top'
                  src={pokemon.img}
                  alt={pokemon.name}
                  className='px-4 pt-2'
                />
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
          ))
        )}
      </Row>
    </main>
  );
};

export default PokeDexDisplay;
