import React from "react";

import PokemonLogo from "../../assets/pokemon.svg";

const PokemonDetails = (props) => {
  const attribute = props.attribute;

  if (attribute === null) {
    return (
      <div className="pokemon__details hide-scrollbar">
        <div className="pokemon__details__identifier">
          <img
            className="pokemon__details__identifier__logo"
            src={PokemonLogo}
            alt="Pokemon Logo"
          />

          <div className="pokemon__details__identifier__empty">
            <h1>Welcome!</h1>
            <h5>Click pokemon to see the details</h5>
          </div>
        </div>

        <div className="pokemon__details__stats">
          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>

          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>

          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>

          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>

          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>

          <div className="pokemon__details__stats__box col-4">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pokemon__details hide-scrollbar">
        <div className="pokemon__details__identifier">
          <img
            className="pokemon__details__identifier__logo"
            src={PokemonLogo}
            alt="Pokemon Logo"
          />

          <div className="pokemon__details__identifier__type">
            {attribute.types.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </div>

          <img
            className="pokemon__details__identifier__image"
            src={attribute.image}
            alt={attribute.name + "'s image"}
          />

          <p>
            #{attribute.id}.&nbsp;{attribute.name}
          </p>
        </div>

        <div className="pokemon__details__stats">
          {attribute.stats.map((stat, index) => (
            <div className="pokemon__details__stats__box col-4" key={index}>
              <div>{stat.title}</div>
              <div>{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="pokemon__details__ability">
          <div>Abilities:</div>
          {attribute.abilities.map((ability, index) => (
            <span key={index}>{ability}</span>
          ))}
        </div>

        <div className="pokemon__details__panel">
          {attribute.moves.map((move, index) => (
            <span key={index}>{move}</span>
          ))}
        </div>
      </div>
    );
  }
};

export default PokemonDetails;
