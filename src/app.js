class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
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
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  };
  handleDeleteOption(option) {
    const index = this.state.options.indexOf(option);
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option)
    }))
  }
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

    this.setState((prevState) => ({
      options: [...prevState.options, option] 
    }))
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
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }/>
        <AddOption 
          handleAddOption={ this.handleAddOption }/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      {
        props.subtitle && (
          <p>{ props.subtitle }</p>
        )
      }
    </div>
  )
}

Header.defaultProps = {
  title: 'Default Title'
}

const Action = (props) => {
  return (
    <div>
      <button 
        disabled={ !props.hasOptions } 
        onClick={ props.handlePick }>What should I do?</button>
    </div>
  )
}

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

const Option = (props) => {
  return (
    <div>
      { props.text }
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.text)
        } }>
        Remove
      </button>
    </div>
  )
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));