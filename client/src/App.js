import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Tenant from './pages/Tenant/Tenant';
import Manager from './pages/Manager/Manager';
import Footer from './components/Footer/Footer';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/tenant' component={Tenant}/>
      <Route path='/manager' component={Manager}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <Main />
      <Footer/>
      </div>
    );
  }
}

export default App;
