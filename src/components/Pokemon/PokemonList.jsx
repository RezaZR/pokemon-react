import React, { Component } from "react";

import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=10",
    urlType: "https://pokeapi.co/api/v2/type",
    previous: null,
    next: null,
    pokemons: null,
    lastSelectedPokemon: null,
    types: null,
    isFiltered: false,
    limit: null,
    offset: null,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const result = await this.getPokemon(this.state.url);
    this.setPokemon(result);

    const resultType = await axios.get(this.state.urlType);
    this.setState({
      types: resultType.data.results.map((result) => {
        return result.name;
      }),
    });
  }

  getPokemon(url) {
    return axios.get(url);
  }

  setPokemon(result) {
    this.setState({
      previous: result.data.previous,
      next: result.data.next,
      pokemons: result.data["results"],
    });
  }

  removeLastSelectedPokemon() {
    if (this.state.lastSelectedPokemon !== null)
      document.querySelector(
        `[data-index=${this.state.lastSelectedPokemon.classList.remove(
          "active"
        )}]`
      );
  }

  handleClick(e, url, type) {
    this.props.getSelectedPokemon(url);
    this.removeLastSelectedPokemon();
    if (type === "click") {
      this.setState({ lastSelectedPokemon: e.target });
      e.target.classList.add("active");
    } else {
      this.setState({ lastSelectedPokemon: e });
      e.classList.add("active");
    }
  }

  handleClickFilter() {
    let inputList = document.querySelector("#type_list");
    inputList.value = "";
    this.handleChange(inputList, "filter");
  }

  async handleChange(e, type) {
    let value = null;
    type === "datalist" ? (value = e.target.value) : (value = e.value);

    this.removeLastSelectedPokemon();

    if (value === "") {
      const result = await this.getPokemon(this.state.url);
      this.setPokemon(result);
      this.setState({
        lastSelectedPokemon: null,
        isFiltered: false,
        limit: null,
        offset: null,
      });
    } else {
      const resultType = await axios.get(
        this.state.urlType + `/${e.target.value}`
      );
      this.setState({
        previous: null,
        next: null,
        pokemons: resultType.data.pokemon.map((pokemon) => {
          return {
            name: pokemon.pokemon.name,
            url: pokemon.pokemon.url,
          };
        }),
        lastSelectedPokemon: null,
        isFiltered: true,
        limit: 10,
        offset: 0,
      });
    }
  }

  async handleNavigation(direction) {
    switch (direction) {
      case "top":
        if (
          this.state.lastSelectedPokemon !== null &&
          parseInt(this.state.lastSelectedPokemon.dataset.index) !== 9
        ) {
          if (
            this.state.lastSelectedPokemon.nextSibling.dataset.index - 1 !==
            0
          )
            this.handleClick(
              this.state.lastSelectedPokemon.previousSibling,
              this.state.lastSelectedPokemon.previousSibling.dataset.url,
              "navigation"
            );
        } else if (
          this.state.lastSelectedPokemon !== null &&
          parseInt(this.state.lastSelectedPokemon.dataset.index) === 9
        ) {
          this.handleClick(
            this.state.lastSelectedPokemon.previousSibling,
            this.state.lastSelectedPokemon.previousSibling.dataset.url,
            "navigation"
          );
        }

        break;
      case "bottom":
        if (
          this.state.lastSelectedPokemon !== null &&
          parseInt(this.state.lastSelectedPokemon.dataset.index) + 1 !== 10
        )
          this.handleClick(
            this.state.lastSelectedPokemon.nextSibling,
            this.state.lastSelectedPokemon.nextSibling.dataset.url,
            "navigation"
          );

        break;
      case "right":
        if (this.state.isFiltered) {
          const newLimit = this.state.limit + 10;
          const newOffset = this.state.offset + 10;
          if (this.state.pokemons.length - newLimit > -10) {
            this.removeLastSelectedPokemon();
            this.setState({
              limit: newLimit,
              offset: newOffset,
            });
          }
        } else {
          if (this.state.next !== null) {
            const result = await this.getPokemon(this.state.next);
            this.removeLastSelectedPokemon();
            this.setState({ lastSelectedPokemon: null });
            this.setPokemon(result);
          }
        }

        break;
      case "left":
        if (this.state.isFiltered) {
          const newLimit = this.state.limit - 10;
          const newOffset = this.state.offset - 10;
          if (newLimit > 0) {
            this.removeLastSelectedPokemon();
            this.setState({
              limit: newLimit,
              offset: newOffset,
            });
          }
        } else {
          if (this.state.previous !== null) {
            const result = await this.getPokemon(this.state.previous);
            this.removeLastSelectedPokemon();
            this.setState({ lastSelectedPokemon: null });
            this.setPokemon(result);
          }
        }
        break;
      default:
        return;
    }
  }

  render() {
    let pokemonList = null;
    if (
      this.state.pokemons !== null &&
      this.state.pokemons.length !== 0 &&
      this.state.types !== null
    )
      pokemonList = this.state.isFiltered
        ? this.state.pokemons
            .slice([this.state.offset], [this.state.limit])
            .map((pokemon, index) => (
              <div
                className="pokemon__list__wrapper__item"
                data-index={index}
                data-url={pokemon.url}
                key={index}
                onClick={(e) => {
                  this.handleClick(e, pokemon.url, "click");
                }}
              >
                {pokemon.name}
              </div>
            ))
        : this.state.pokemons.map((pokemon, index) => (
            <div
              className="pokemon__list__wrapper__item"
              data-index={index}
              data-url={pokemon.url}
              key={index}
              onClick={(e) => {
                this.handleClick(e, pokemon.url, "click");
              }}
            >
              {pokemon.name}
            </div>
          ));

    if (this.state.pokemons !== null && this.state.pokemons.length === 0)
      pokemonList = (
        <div className="pokemon__list__wrapper__item pokemon__list__wrapper__item--empty">
          Pokemon list is empty
        </div>
      );

    let clearButton = this.state.isFiltered ? (
      <button
        onClick={() => {
          this.handleClickFilter();
        }}
      >
        Clear
      </button>
    ) : null;

    return this.state.pokemons !== null && this.state.types !== null ? (
      <div className="pokemon__list">
        <div className="pokemon__list__wrapper">{pokemonList}</div>
        <div className="pokemon__list__filter">
          <div className="pokemon__list__filter__datalist">
            <label htmlFor="type_list">Filter:</label>
            <input
              list="types"
              id="type_list"
              name="type_list"
              onChange={(e) => {
                this.handleChange(e, "datalist");
              }}
            />
            <datalist id="types">
              {this.state.types.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))}
            </datalist>
          </div>

          {clearButton}
        </div>
        {this.state.pokemons !== null && this.state.pokemons.length !== 0 ? (
          <div className="pokemon__list__ball"></div>
        ) : null}
        <div className="pokemon__list__hello"></div>
        <div className="pokemon__list__navigation">
          <button
            onClick={() => {
              this.handleNavigation("top");
            }}
          ></button>
          <button
            onClick={() => {
              this.handleNavigation("right");
            }}
          ></button>
          <button
            onClick={() => {
              this.handleNavigation("bottom");
            }}
          ></button>
          <button
            onClick={() => {
              this.handleNavigation("left");
            }}
          ></button>
        </div>
      </div>
    ) : null;
  }
}
