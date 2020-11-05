import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokemon from './Pokemon'
import PokemonDetail from './PokemonDetail'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Redirect to="/pokemon" /></Route>
      <Route exact path="/pokemon" component={Pokemon} />
      <Route exact path="/pokemon/:name" component={PokemonDetail} />
      <Route render={() => <Redirect to="/pokemon" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
