import React, {Component} from 'react';
import {Noticias, HeaderContent} from './StyledHeader';
import {FilterMenu} from './StyledHeader';

class Header extends Component {

  render() {
    return (
      <HeaderContent>
        <Noticias>Notícias</Noticias> 
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

