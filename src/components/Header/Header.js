import React, {Component} from 'react';
import {Notices, HeaderContent} from './Header.styles';
import {FilterMenu} from './Header.styles';

class Header extends Component {

  render() {
    return (
      <HeaderContent>
        <Notices>Notícias</Notices> 
        <FilterMenu>
          <option>Filtrar por fonte</option>
          <option>Fonte A</option>
          <option>Fonte B</option>
          <option>Fonte C</option>
          <option>Fonte D</option>
          <option>Fonte E</option>
        </FilterMenu>
      </HeaderContent>
    );
  }
}

export default Header;

