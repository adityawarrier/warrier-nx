import { pokemonSelectors } from '@warrier/state';
import { Box } from '@warrier/ui-components';
import { useSelector } from 'react-redux';
import styles from './dummy.module.scss';

export function Dummy() {
  const pokemons = useSelector(pokemonSelectors.getAll);
  
  return (
    <div className={styles.container}>
      {pokemons.map(p => (
        <div>{JSON.stringify(p)}</div>
      ))}
      <Box size={200} color="purple" />
    </div>
  );
}

export default Dummy;
