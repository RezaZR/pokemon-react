import React, { Component } from "react";

import "./Pokemon.css";

import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";

import axios from "axios";

export default class Pokemon extends Component {
  state = {
    selectedAttribute: null,
  };

  getUrl = (url) => {
    return axios.get(url);
  };

  getSelectedPokemon = async (url) => {
    const result = await this.getUrl(url);
    this.setState({
      selectedAttribute: {
        id: result.data.id,
        abilities: result.data.abilities.map((ability) => {
          return ability.ability.name;
        }),
        moves: result.data.moves.map((move) => {
          return move.move.name;
        }),
        name: result.data.name,
        image: result.data.sprites.front_default,
        stats: result.data.stats.map((stat) => {
          return {
            title: stat.stat.name,
            value: stat.base_stat,
          };
        }),
        types: result.data.types.map((type) => {
          return type.type.name;
        }),
      },
    });
  };

  render() {
    return (
      <div className="pokemon">
        <PokemonDetails attribute={this.state.selectedAttribute} />
        <div className="pokemon__divider">
          <div></div>
          <div></div>
        </div>
        <PokemonList getSelectedPokemon={this.getSelectedPokemon} />
      </div>
    );
  }
}
