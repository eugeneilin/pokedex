import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const AdvancedSearch = ({
  pokemonData,
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  weaknessFilter,
  setWeaknessFilter,
  handleReset,
}) => {
  const allTypes = [];
  const allWeaknesses = [];

  function getAllTypes() {
    return pokemonData.map((pokemon) => {
      // eslint-disable-next-line
      return pokemon.type.map((t) => {
        if (!allTypes.includes(t)) {
          return allTypes.push(t);
        }
      });
    });
  }
  getAllTypes();

  function getAllWeaknesses() {
    return pokemonData.map((pokemon) => {
      // eslint-disable-next-line
      return pokemon.weaknesses.map((weakness) => {
        if (!allWeaknesses.includes(weakness)) {
          return allWeaknesses.push(weakness);
        }
      });
    });
  }
  getAllWeaknesses();

  return (
    <Card id='search' className='text-black w-100 mx-auto px-3 pb-3 fs-5'>
      <h5 className='mt-3 text-center'>Advanced Search Options</h5>
      <Row>
        <Col xs={12} md={4}>
          <Form.Control
            type='text'
            placeholder='Search by name...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} md={4}>
          <Form.Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value='all-types'>Select Type</option>
            {allTypes.sort().map((type, idx) => (
              <option key={`type-${type}-${idx}`} value={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} md={4}>
          <Form.Select value={weaknessFilter} onChange={(e) => setWeaknessFilter(e.target.value)}>
            <option value='all-weaknesses'>Select Weakness</option>
            {allWeaknesses.sort().map((weakness, idx) => (
              <option key={`weakness-${weakness}-${idx}`} value={weakness}>
                {weakness}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      {search !== '' || typeFilter !== 'all-types' || weaknessFilter !== 'all-weaknesses' ? (
        <Button
          className='bg-dark mt-3 mb-2 p-2 w-25 mx-auto d-block'
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </Button>
      ) : null}
    </Card>
  );
};

export default AdvancedSearch;
