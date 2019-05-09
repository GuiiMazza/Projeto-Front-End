import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag } from './News.styles';
import Moment from 'react-moment';
import 'moment-timezone'

class News extends Component {

  
  render() {
    return (
      <Fragment>
        {this.props.news.articles && this.props.news.articles.slice(0, 6 * this.props.pagination).map((news) => (
          <HeadlineBox>
            <HeadlineTitle>
              {news.title}
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
  page: PropTypes.number
};

export default News;