import { Box, Button } from '@warrier/ui-components';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['container']}>
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

export default App;
