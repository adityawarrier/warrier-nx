import { pokemonSelectors } from '@warrier/state';
import { Box, Button } from '@warrier/ui-components';
import { useSelector } from 'react-redux';
import styles from './dummy.module.scss';

export function Dummy() {
  const pokemons = useSelector(pokemonSelectors.getAll);
  
  return (
    <div className={styles.container}>
      {pokemons.map(p => (
        <div>{JSON.stringify(p)}</div>
      ))}
      <Button
        title="Click Me!"
        onClick={() => {
          console.log('LOL!');
        }}
      />
      <Box size={200} color="lightpink" />
    </div>
  );
}

export default Dummy;
