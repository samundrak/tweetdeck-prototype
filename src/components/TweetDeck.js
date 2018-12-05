import React, { Component } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import Tweets from './Tweets';

const TweetDeckBox = styled.div`
  border-right-style: solid;
  border-right-width: 5px;
  border-right-color: white;
`;
const TitleHeader = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 50px;
    color: #38444d;
    background-color: #f5f8fa;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
}
`;
const TweetsHolder = styled.div`
  margin-top: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #f5f8fa;
`;
class TweetDeck extends Component {
  render() {
    const { handle } = this.props;
    return (
      <TweetDeckBox>
        <TitleHeader>
          <a
            href={`https://twitter.com/${handle}`}
            target="_blank"
            rel="noopener"
          >
            @{handle}
          </a>
        </TitleHeader>
        <TweetsHolder>
          <Scrollbars style={{ height: '100vh' }}>
            <Tweets />
          </Scrollbars>
        </TweetsHolder>
      </TweetDeckBox>
    );
  }
}
export default TweetDeck;
