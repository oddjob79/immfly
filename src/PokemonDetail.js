import React from 'react';
import './index.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class PokemonDetail extends React.Component {

  state = {
    pokemon: [],
    isLoading: true
  }

  // axios method, uses the species name as passed as a prop, to retrieve pokemon info from API and place in state.pokemon element
  retrievePokemon() {
    const name = this.props.match.params.name;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      const pokemon = res.data;
      this.setState({ pokemon });
      // set isLoading flag to false
      this.setState({ isLoading: false })
    }).catch(err => {
      console.log(err);
      this.props.history.push("/pokemon")
    })
  }

  componentDidMount() {
    // on mount retrieve pokemon details
    this.retrievePokemon();
  }

  render() {
    // Display loading text while waiting for the data to be retrieved
    if (this.state.isLoading) {
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className="pokebody">
        <div className="grid-container dets">
          <div className="grid-item dets">
            {/* Use the X as a link to the pokemoen list page */}
            <a href="../pokemon">X</a>
            {/* display the pokemon data */}
            <p><img align="center" alt={this.state.pokemon.name} src={"https://img.pokemondb.net/sprites/black-white/anim/normal/"+this.state.pokemon.name+".gif"} /></p>
            <p className="caps">{this.state.pokemon.name}</p>
            <div className="stats">
              <p><b>ID:</b> {this.state.pokemon.id}</p>
              <p><b>Type:</b> <PokemonTypes  types={this.state.pokemon.types}/></p>
              <p><b>Height:</b> {this.state.pokemon.height}</p>
              <PokemonAbilities  pabs={this.state.pokemon.abilities}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// can be more than one type, use class component to populate
class PokemonTypes extends React.Component {
  render() {
    return (
      <span>
      { this.props.types.map(type=>
        <span key={type.slot}>
          {type.type.name},&nbsp;
        </span>
      )}
      </span>
    );
  }
}

// can be more than one ability, use class component to populate
class PokemonAbilities extends React.Component {
  render() {
    return (
      <ul className="caps"><b>Abilities:</b>
        { this.props.pabs.map(pabs=>
          <li key={pabs.slot}>
            {pabs.ability.name}
          </li>
        )}
      </ul>
    );
  }
}

export default withRouter(PokemonDetail);
