import React, {Component,Fragment} from 'react';
import { MancheteBox, MancheteTitle, MancheteTags, MancheteDate, Tag } from './StyledNews';

class News extends Component {
  render() {
    return (
      <Fragment>
        <MancheteBox>
          <MancheteTitle>
            Manchete 1
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte A
              </Tag>
          </MancheteTags>
        </MancheteBox>
        <MancheteBox>
          <MancheteTitle>
            Manchete 2
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte B
              </Tag>
          </MancheteTags>
        </MancheteBox>
        <MancheteBox>
          <MancheteTitle>
            Manchete 3
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte C
              </Tag>
          </MancheteTags>
        </MancheteBox>
        <MancheteBox>
          <MancheteTitle>
            Manchete 4
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte D
              </Tag>
          </MancheteTags>
        </MancheteBox>
        <MancheteBox>
          <MancheteTitle>
            Manchete 5
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte E
              </Tag>
          </MancheteTags>
        </MancheteBox>
        <MancheteBox>
          <MancheteTitle>
            Manchete 6
          </MancheteTitle>
          <MancheteTags>
            <MancheteDate>
              12/04/2019
            </MancheteDate>
              <Tag>
                Fonte F
              </Tag>
          </MancheteTags>
        </MancheteBox>
      </Fragment>
    );
  }
}

export default News;