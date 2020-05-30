import React, { Fragment } from "react";

const PokemonDetails = (props) => {
  const attribute = props.attribute;
  if (attribute === null) {
    return null;
  } else {
    return (
      <Fragment>
        <img src={attribute.image} alt={attribute.name + "'s image"} />
        <div>
          {attribute.types.map((type, index) => (
            <span key={index}>{type}</span>
          ))}
        </div>
        <div>{attribute.name}</div>
        <div>
          {attribute.stats.map((stat, index) => (
            <div className="col-6" key={index}>
              <span>{stat.title}</span>
              <span>{stat.value}</span>
            </div>
          ))}
        </div>
        <div>
          {attribute.abilities.map((ability, index) => (
            <span key={index}>{ability}</span>
          ))}
        </div>
        <div>
          {attribute.moves.map((move, index) => (
            <span key={index}>{move}</span>
          ))}
        </div>
      </Fragment>
    );
  }
};

export default PokemonDetails;
