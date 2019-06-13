import React, { Component, Fragment } from 'react';
import {Card, GlobalStyle, Button} from './App.styles';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../Header';
import News from '../News';
import '../../store/action/news';

class App extends Component {

  // state = {
  //   news: {},
  //   filters: {},
  //   pagination: 1,
  //   source: "",
  // }

  // componentWillMount() {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     this.setState({ news: data, filters: data})
  //   })
  //   .catch(console.log)
  // }
 
  showButton = () => {
    this.setState({pagination: this.state.pagination + 1});
  }

  // changeSource = (event) => {
  //   console.log( event.target.value)
  //   this.setState({ source: event.target.value})
  // }

  
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Card>
            <Header />
            <News />
            <Button onClick={this.showButton}>Mostrar mais</Button>
          </Card>
        </Fragment>
      </Provider>
    );
  }
}


export default (App);
