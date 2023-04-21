import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';

const AdvancedSearch = ({ pokemonData, search, setSearch }) => {
  const allTypes = [];
  const allWeaknesses = [];

  function getAllTypes() {
    return pokemonData.map((pokemon) => {
      pokemon.type.map((t) => {
        if (!allTypes.includes(t)) {
          return allTypes.push(t);
        }
      });
    });
  }
  getAllTypes();

  function getAllWeaknesses() {
    return pokemonData.map((pokemon) => {
      pokemon.weaknesses.map((weakness) => {
        if (!allWeaknesses.includes(weakness)) {
          return allWeaknesses.push(weakness);
        }
      });
    });
  }
  getAllWeaknesses();

  return (
    <Card id='search' className='text-black w-100 px-3 pb-3 fs-5'>
      <Row>
        <Col className='pt-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Start typing...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className='pt-3'>
          <Form.Label>Type</Form.Label>
          {allTypes.sort().map((type, idx) => (
            <span className='mb-3' key={`type-${type}-${idx}`}>
              <span className='d-block'>
                <Form.Check type='checkbox' id={`type-${type}`} label={`${type}`} />
              </span>
            </span>
          ))}
        </Col>
        <Col className='pt-3'>
          <Form.Label>Weakness</Form.Label>
          {allWeaknesses.sort().map((weakness, idx) => (
            <span className='mb-3' key={`weakness-${weakness}-${idx}`}>
              <span className='d-block'>
                <Form.Check type='checkbox' id={`weakness-${weakness}`} label={`${weakness}`} />
              </span>
            </span>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default AdvancedSearch;
