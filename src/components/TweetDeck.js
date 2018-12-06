import React, { Component } from 'react';
import { Spin } from 'antd';
import renderIf from 'render-if';
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
    text-align: left;
    font-weight: bold;
    padding-left: 10px;
}
`;
const TweetsHolder = styled.div`
  margin-top: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #f5f8fa;
`;
const TweetDeck = ({ handle, tweets, isLoading, handleActions }) => (
  <TweetDeckBox>
    <TitleHeader>
      <a href={`https://twitter.com/${handle}`} target="_blank" rel="noopener">
        @{handle}
      </a>
    </TitleHeader>
    <Spin spinning={isLoading}>
      <TweetsHolder>
        <Scrollbars style={{ height: '100vh' }}>
          {renderIf(tweets)(
            <Tweets tweets={tweets} handleActions={handleActions} />,
          )}
          {!tweets && !isLoading && <p>No tweets</p>}
        </Scrollbars>
      </TweetsHolder>
    </Spin>
  </TweetDeckBox>
);
export default TweetDeck;
