import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag } from './News.styles';

class News extends Component {
  render() {
    return (
      <Fragment>
        {this.props.news.articles && this.props.news.articles.map((news) => (
          <HeadlineBox>
            <HeadlineTitle>
              {news.title}
            </HeadlineTitle>
            <HeadlineTags>
              <HeadlineDate>
                {news.publishedAt} 
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
  news: PropTypes.object
};

export default News;