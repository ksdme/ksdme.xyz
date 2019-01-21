import './LabelSet.css';

import React from 'react'

const LabelSet = (props) => {

  return (
    <span className='label-set'>
      { props.children }
    </span>    
  );

}

export default LabelSet;
