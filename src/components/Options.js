import React from 'react';
import Option from './Option.js';
const Options = (props) => {
  return (
    <div className="options container">
      <div className="options__header">
        <p className="options__header--text">{ props.options.length === 0 ? 'No data inputed yet' : 'Your Options' }</p>
        <button 
          className="button button__link"
          onClick={ props.handleDeleteOptions }>
          Remove All
        </button>
      </div>
      <div 
        className="bg-gray">
        { 
          props.options.map(option => (
            <Option 
              key={ option } 
              text={ option } 
              handleDeleteOption={ props.handleDeleteOption } />
          )) 
        }
      </div>
    </div>
  )
}
export default Options;