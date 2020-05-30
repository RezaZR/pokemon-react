import React, { Component } from "react";

import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=10",
    pokemons: null,
  };

  async componentDidMount() {
    const result = await axios.get(this.state.url);
    this.setState({ pokemons: result.data["results"] });
  }

  render() {
    return this.state.pokemons !== null ? (
      <React.Fragment>
        {this.state.pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            onClick={() => {
              this.props.getSelectedPokemon(pokemon.url);
            }}
          >
            {pokemon.name}
          </div>
        ))}
      </React.Fragment>
    ) : null;
  }
}
