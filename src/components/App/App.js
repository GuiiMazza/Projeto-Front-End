import React, { Component, Fragment } from 'react';
import {Card, GlobalStyle, Button} from './App.styles';
import Header from '../Header';
import News from '../News';

class App extends Component {

  state = {
    news: {},
    filters: {},
  }

  componentWillMount() {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-08&sortBy=publishedAt&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ news: data, filters: data})
    })
    .catch(console.log)
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Card>
          <Header filters={this.state.filters} />
          <News news={this.state.news}/>
          <Button>Mostrar mais</Button>
        </Card>
      </Fragment>
    );
  }
}

export default App;
