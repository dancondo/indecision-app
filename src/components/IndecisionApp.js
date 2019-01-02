import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './addOption.js';
import Options from './Options.js';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  };
  handleDeleteOption = (option) => {
    const index = this.state.options.indexOf(option);
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option)
    }))
  };
  handlePick = () => {
    const option = Math.floor(Math.random() * this.state.options.length) 
    alert(this.state.options[option])
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Please enter an option!'
    }
    if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!'
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option] 
    }))
  };
  componentDidMount() {
    const json = localStorage.getItem('options')
    if (json) {
      const options = JSON.parse(json);
      this.setState(() => ({ options }))
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  };
  render() { 
    return (
      <div>
        <Header title='Indecision App' subtitle='Put your life in the hands of a computer' />
        <Action 
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }/>
        <Options 
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }/>
        <AddOption 
          handleAddOption={ this.handleAddOption }/>
      </div>
    )
  }
}