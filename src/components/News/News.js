import React, {Component,Fragment} from 'react';
import {Button} from '../App/App.styles'
import PropTypes from 'prop-types';
import {fetchNews, showButton} from '../../store/action/news'
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag, StyledLink } from './News.styles';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone'


class News extends Component {


componentDidMount() {
  this.props.onfetchNews();
}

showButton = () => {
  this.props.onshowButton(this.props.news.pagination + 1)
}
  
  render() {
    return (
      <Fragment>
        {this.props.articles && this.props.articles.filter((news) => {return news}).slice(0, 5 * this.props.news.pagination).map((news) => (
          <HeadlineBox key={news.source.name+"_"+news.author}>
            <HeadlineTitle>
              <StyledLink href={news.url} target="_blank">{news.title}</StyledLink>
            </HeadlineTitle>
            <HeadlineTags>
              <HeadlineDate>
                <Moment format="DD/MM/YYYY">{news.publishedAt}</Moment> 
              </HeadlineDate>
                <Tag>
                  {news.source.name}
                </Tag>
            </HeadlineTags>
          </HeadlineBox>
        ))}
        <Button onClick={this.showButton}>Mostrar mais</Button>
      </Fragment>
    );
  }
}

const getFilteredArticles = (articles, filter) => {
  if (!filter) {
    return articles;
  }
  const filtered = articles.filter((article) => article.source.id === filter);
  return filtered;
};


const mapDispatchToProps = {
  onfetchNews: fetchNews,
  onshowButton: showButton
}

const mapStateToProps = (state) => {
  const articlesFiltred = getFilteredArticles(state.news.articles, state.header.filter)
  return {
    news: state.news,
    articles: articlesFiltred,
    pagination: state.pagination, 
  }
}

News.propTypes = {
  news: PropTypes.object,
  page: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);