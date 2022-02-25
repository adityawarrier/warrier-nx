import { Box, Button } from '@warrier/ui-components';

export function App() {
  return (
    <div>
      <Button
        title="App Two"
        onClick={() => {
          console.log('App Two Clicked!');
        }}
      />
      <Box />
    </div>
  );
}

export default App;
