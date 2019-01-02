import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (event) => {
    event.preventDefault();
    const option = event.target.option.value.trim();
    const error = this.props.handleAddOption(option)
    event.target.option.value = ''
    this.setState(() => ({ error }))
  };
  render() {
    return (
      <div className="container bg-gray">
        { this.state.error && (
          <p>{ this.state.error }</p>  
        )}
        <form 
          className="add-option"
          onSubmit={ this.handleAddOption }>
          <input name="option" />
          <button 
            className="button button__main"
            type="submit" >
            Add Option
          </button>
        </form>
      </div>
    )
  }
}