import React from 'react';
const Option = (props) => (
  <li className="option">
    { props.text }
    <button 
      className="button button__link"
      onClick={(e) => {
        props.handleDeleteOption(props.text)
      } }>
      Remove
    </button>
  </li>
)
export default Option;