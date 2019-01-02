import React from 'react';

const Action = (props) => {
  return (
    <div className="container margin-y-2">
      <button 
        className="button button__main button__lg block"
        disabled={ !props.hasOptions } 
        onClick={ props.handlePick }>What should I do?</button>
    </div>
  )
}
export default Action;