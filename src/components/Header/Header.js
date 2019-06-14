import React, {Component} from 'react';
import {Notices, HeaderContent} from './Header.styles';
import {FilterMenu} from './Header.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilter, setFilter } from '../../store/action/header'

class Header extends Component {

  componentDidMount() {
    this.props.onfetchFilter()
  }

   changeSource = (event) => {
    this.props.onsetFilter(event.target.value)
  }

  render() {
    return (
      <HeaderContent>
        <Notices>Notícias</Notices>
          <FilterMenu onChange={this.changeSource}>
            <option>Filtrar por fonte</option>
            {this.props.articles.map((article) => (
              <option value={article.source.id} key={article.source.name+"_"+article.url}>{article.source.name}</option>  
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
  onfetchFilter: fetchFilter,
  onsetFilter: setFilter,

}

const mapStateToProps = (state) => {
  return {
    articles: state.header.articles,
    filter: state.header.filter,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

