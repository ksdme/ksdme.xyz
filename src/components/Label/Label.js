import './Label.css';

import React from 'react'

const Label = (props) => {

  return (
    <span className='label-span'>
      { props.children }
    </span>
  );

}

export default Label;
