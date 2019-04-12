import React, { Component, Fragment } from 'react';
import {Card, GlobalStyle} from './StyledApp';
import Header from '../Card/Header';
import News from '../RedLine/News';
import Button from '../Button/Button'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Card>
          <Header />
          <News />
          <Button />
        </Card>
      </Fragment>
    );
  }
}

export default App;
