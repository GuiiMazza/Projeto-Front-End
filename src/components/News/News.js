import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag, StyledLink } from './News.styles';
import Moment from 'react-moment';
import 'moment-timezone'

class News extends Component {

  
  render() {
    return (
      <Fragment>
        {this.props.news.articles && this.props.news.articles.filter((news) => {return news.source.id === this.props.source || this.props.source === ""}).slice(0, 6 * this.props.pagination).map((news) => (
          <HeadlineBox key={news.source.id+"_"+news.author}>
            <HeadlineTitle>
              <StyledLink href={news.url}>{news.title}</StyledLink>
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

News.propTypes = {
  news: PropTypes.object,
  page: PropTypes.number,
};

export default News;