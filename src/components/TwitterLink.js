import React from 'react';
import PropTypes from 'prop-types';

const TwitterLink = ({ handle, children }) => (
  <a href={`https://twitter.com/${handle}`} target="_blank">
    {children || `@${handle}`}
  </a>
);
TwitterLink.defaultProps = {
  children: <div />,
};
TwitterLink.propTypes = {
  handle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default TwitterLink;
