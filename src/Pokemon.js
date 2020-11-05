import React from 'react';
import './index.css';
import axios from 'axios';
import PokemonLogo from './assets/Pokemon-Logo2.png';

class Pokemon extends React.Component {
  state = {
    species: [],
    count: '',
    isLoading: true,
    fullSpecies: []
  }

  // axios method to retrieve pokemon species info from API and place in state.species element
  retrieveSpecies() {
    axios.get('https://pokeapi.co/api/v2/generation/1/')
    .then(res => {
      const species = res.data.pokemon_species;
      this.setState({ species })
      this.setState({ fullSpecies: species })
      this.setState({ count: species.length })
      this.setState({ isLoading: false })
    })
  }

  componentDidMount() {
    // on mount retrieve all pokemon species in generation 1
    this.retrieveSpecies();
  }

  pokeFilter(event) {
    // this.setState({ pokesearch: event.target.value });
    this.setState({ species: this.state.fullSpecies.filter(species=>species.name.includes(event.target.value)) });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div className="pokebody">
        {/* display logo */}
        <h1><img width="300px;" alt="Pokemon" src={PokemonLogo} /></h1>
        <h4>Generation 1</h4>
        {/* How many records returned? */}
        <h5>{this.state.count} pokemon</h5>
        <input type="text" placeholder="Pokesearch" onChange={this.pokeFilter.bind(this)}></input>
        {/*<button onClick={this.retrieveSpecies()}>Reset</button>*/}
        <div className="grid-container">
          {/* loop through each species and return the species name for use with routing, and displaying the name and relevant image */}
          { this.state.species.map((species, idx) =>
            <a key={idx} className="species" href={"./pokemon/"+species.name}>
              <div className="grid-item">
                <p><img align="center" alt={species.name} src={"https://img.pokemondb.net/sprites/black-white/anim/normal/"+species.name+".gif"} /></p>
                <h3 className="caps">{species.name}</h3>
              </div>
            </a>
          )}
        </div>
      </div>
    )
  }

}

export default Pokemon;
