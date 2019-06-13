import React, {Component} from 'react';
import {Notices, HeaderContent} from './Header.styles';
import {FilterMenu} from './Header.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilter } from '../../store/action/header'

class Header extends Component {

  componentDidMount() {
    this.props.onfetchFilter()
  }

  render() {
    return (
      <HeaderContent>
        <Notices>Notícias</Notices>
          <FilterMenu onChange={this.props.onFilter}>
            <option>Filtrar por fonte</option>
            {this.props.articles.map((article) => (
              <option value={article.source.id} key={article.source.id}>{article.source.name}</option>  
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

const mapDispatchToProps = {
  onfetchFilter: fetchFilter
}

const mapStateToProps = (state) => {
  return {
    articles: state.header.articles,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

