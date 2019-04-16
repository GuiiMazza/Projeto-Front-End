import React, { Component, Fragment } from 'react';
import {Card, GlobalStyle, Button} from './App.styles';
import Header from '../Header';
import News from '../News';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Card>
          <Header />
          <News />
          <Button>Mostrar mais</Button>
        </Card>
      </Fragment>
    );
  }
}

export default App;
