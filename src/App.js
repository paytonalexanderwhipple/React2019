import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;