class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  };
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  };
  handlePick() {
    const option = Math.floor(Math.random() * this.state.options.length) 
    alert(this.state.options[option])
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please enter an option!'
    }
    if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!'
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option] 
      }
    })
  }
  render() {
    const app = {
      title: 'Indecision App', 
      subtitle: 'Put your life in the hands of a computer'
    }
    return (
      <div>
        <Header title={ app.title } subtitle={ app.subtitle } />
        <Action 
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }/>
        <Options 
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }/>
        <AddOption 
          handleAddOption={ this.handleAddOption }/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.subtitle }</p>
      </div>
    )
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          disabled={ !this.props.hasOptions } 
          onClick={ this.props.handlePick }>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
        { this.props.options.map(option => <Option key={ option } text={ option } />) }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        { this.props.text }
      </div>
    )
  }
}

class AddOption extends React.Component {
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
    this.setState(() => {
      return {
        error
      }
    })
    
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));