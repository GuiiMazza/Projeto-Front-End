import React, { Component, Fragment } from 'react';
import {Card, GlobalStyle } from './App.styles';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../Header';
import News from '../News';
import '../../store/action/news';

class App extends Component {

  

  
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Card>
            <Header />
            <News />
          </Card>
        </Fragment>
      </Provider>
    );
  }
}


export default (App);
