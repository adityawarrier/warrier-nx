import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
}
export interface PokemonState {
  list: Pokemon[];
}

export const POKEMON_FEATURE_KEY = 'pokemon';
export const initialPokemonState: PokemonState = {
  list: [
    {
      id: 1,
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    },
    {
      id: 2,
      name: 'Ivysaur',
      type: ['Grass', 'Poison'],
    },
  ],
};

export const pokemonSlice = createSlice({
  name: POKEMON_FEATURE_KEY,
  initialState: initialPokemonState,
  reducers: {},
});

export const pokemonReducer = pokemonSlice.reducer;
export const pokemonActions = pokemonSlice.actions;
export const pokemonSelectors = {
  getAll: createSelector(
    [(state: RootStateOrAny) => state.pokemon],
    (pokemon: PokemonState) => pokemon.list
  ),
};
