import React, {Component,Fragment} from 'react';
import { HeadlineBox, HeadlineTitle, HeadlineTags, HeadlineDate, Tag } from './News.styles';

class News extends Component {
  render() {
    return (
      <Fragment>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 1
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte A
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 2
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte B
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 3
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte C
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 4
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte D
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 5
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte E
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
        <HeadlineBox>
          <HeadlineTitle>
            Manchete 6
          </HeadlineTitle>
          <HeadlineTags>
            <HeadlineDate>
              12/04/2019
            </HeadlineDate>
              <Tag>
                Fonte F
              </Tag>
          </HeadlineTags>
        </HeadlineBox>
      </Fragment>
    );
  }
}

export default News;