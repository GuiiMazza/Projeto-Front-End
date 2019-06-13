import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {fetchNews} from '../../store/action/news'
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag, StyledLink } from './News.styles';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone'


class News extends Component {


componentDidMount() {
  this.props.onfetchNews();
}      
  
  render() {
    return (
      <Fragment>
        {this.props.news.articles && this.props.news.articles.filter((news) => {return news}).map((news) => (
          <HeadlineBox key={news.source.id+"_"+news.author}>
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
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onfetchNews: fetchNews
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

News.propTypes = {
  news: PropTypes.object,
  page: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);