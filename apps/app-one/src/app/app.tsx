import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { POKEMON_FEATURE_KEY, pokemonReducer } from '@warrier/state';
import Dummy from '../components/Dummy/Dummy';

const store = configureStore({
  reducer: {
    [POKEMON_FEATURE_KEY]: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

export function App() {
  return (
    <Provider store={store}>
      <Dummy />
    </Provider>
  );
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default App;
