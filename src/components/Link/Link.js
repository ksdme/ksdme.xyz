import './Link.css';

import React from 'react'

const Link = (props) => {

  return (
    <a href={ props.href } className='link'>
      { props.children }
    </a>
  );

};

export default Link;
