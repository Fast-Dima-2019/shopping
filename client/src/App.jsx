import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import store from './store'
import { Provider } from 'react-redux';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <AppNavbar/>
            <Container>
              <ItemModal/>
              <ShoppingList/>
            </Container>
          </div>
        </Provider>
    )
  }
}

export default App
