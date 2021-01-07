import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component';



function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
