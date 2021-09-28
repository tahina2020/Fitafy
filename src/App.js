import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.pages'
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.pages';
import ShopPage from './pages/shop/shop.pages';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {

    state ={
      currentUser: null
    }
    
    unsubscribeFormAuth = null;

    componentDidMount(){
      this.unsubscribeFormAuth = auth.onAuthStateChanged( async userAuth =>{

        if (userAuth){
          const useRef = await createUserProfileDocument(userAuth);

          useRef.onSnapshot(snapShot =>{
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state);
          })
        }else{
          this.setState({currentUser:userAuth})
        }
      });
    }

    componentWillUnmount(){
      this.unsubscribeFormAuth();
    }

  render(){
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path= '/shop' component={ShopPage} />
            <Route path= '/signin' component={SignInAndSignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
