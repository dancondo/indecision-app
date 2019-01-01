class IndecisionApp extends React.Component {
  render() {
    const app = {
      title: 'Indecision App', 
      subtitle: 'Put your life in the hands of a computer'
    }
    const options = [1, 2, 3];
    return (
      <div>
        <Header title={ app.title } subtitle={ app.subtitle } />
        <Action />
        <Options options={ options }/>
        <AddOption />
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
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <form>
        <input name="option" />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));