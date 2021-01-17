import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    console.log("unsubscribe");
    this.unsubscribeAuth();
  } 

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signIn" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) 
})
export default connect(null, mapDispatchToProps)(App);
