import { fetchPokemon, pokemonAdapter, pokemonReducer } from './pokemon.slice';

describe('pokemon reducer', () => {
  it('should handle initial state', () => {
    const expected = pokemonAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(pokemonReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchPokemons', () => {
    let state = pokemonReducer(undefined, fetchPokemon.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = pokemonReducer(
      state,
      fetchPokemon.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = pokemonReducer(
      state,
      fetchPokemon.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
