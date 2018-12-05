import React from 'react';

const TwitterLink = ({ handle, children }) => {
  return (
    <a href={`https://twitter.com/${handle}`} target="_blank">
      {children || `@${handle}`}
    </a>
  );
};
export default TwitterLink;
