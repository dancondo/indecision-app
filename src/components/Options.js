import React from 'react';
import Option from './Option.js';
const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { 
        props.options.length === 0 && (
          <p>No data inputed yet</p>
        )
      }
      { 
        props.options.map(option => (
          <Option 
            key={ option } 
            text={ option } 
            handleDeleteOption={ props.handleDeleteOption } />
        )) 
      }
    </div>
  )
}
export default Options;