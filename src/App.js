import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

    this.unsubscribeAuth = null;
  }

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    console.log("unsubscribe");
    this.unsubscribeAuth();
  } 

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signIn" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
