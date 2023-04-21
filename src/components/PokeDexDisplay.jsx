import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PokeDexDisplay = ({ pokemonData, search }) => {
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <motion.ul className='container row' variants={container} initial='hidden' animate='visible'>
      {filteredPokemonData.map((pokemon) => (
        <motion.li
          key={pokemon.id}
          className='col-xs-12 col-sm-6 col-md-4 col-lg-3 item'
          variants={item}
        >
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
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PokeDexDisplay;
