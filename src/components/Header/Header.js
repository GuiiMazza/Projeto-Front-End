import React, {Component} from 'react';
import {Notices, HeaderContent} from './Header.styles';
import {FilterMenu} from './Header.styles';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <HeaderContent>
        <Notices>Notícias</Notices>
          <FilterMenu>
            <option>Filtrar por fonte</option>
            {this.props.filters.articles && this.props.filters.articles.map((filter) => (
              <option>{filter.source.name}</option>  
            ))}
          </FilterMenu>
          
      </HeaderContent>
    );
  }
}

Header.propTypes = {
  filters: PropTypes.object
};

export default Header;

