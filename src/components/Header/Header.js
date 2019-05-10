import React, {Component} from 'react';
import {Notices, HeaderContent} from './Header.styles';
import {FilterMenu} from './Header.styles';
import PropTypes from 'prop-types';

class Header extends Component {

  state ={
    sources: [],
  }

  componentWillMount() {
    fetch('https://newsapi.org/v2/sources?apiKey=35440d07648e430bbf3aad8c32c0b8a5', {apikey: '35440d07648e430bbf3aad8c32c0b8a5' })
    .then(res => res.json())
    .then((data) => {
      this.setState({ sources: data.sources})
    })
    .catch(console.log)
  }

  

  render() {
    return (
      <HeaderContent>
        <Notices>Notícias</Notices>
          <FilterMenu onChange={this.props.onFilter}>
            <option>Filtrar por fonte</option>
            {this.state.sources.map((source) => (
              <option value={source.id} key={source.id}>{source.name}</option>  
            ))}
          </FilterMenu>
          
      </HeaderContent>
    );
  }
}

Header.propTypes = {
  filters: PropTypes.object,
  onFilter: PropTypes.func,
};

Header.defaultProps={
  onFilter: () => {},
}


export default Header;

