import React from 'react';

export default class AddOption extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  };
  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.option.value.trim();
    const error = this.props.handleAddOption(option)
    event.target.option.value = ''
    this.setState(() => ({ error }))
  };
  render() {
    return (
      <div>
        { this.state.error && (
          <p>{ this.state.error }</p>  
        )}
        <form onSubmit={ this.handleAddOption }>
          <input name="option" />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}