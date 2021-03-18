import React, {Component} from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }

  render(){
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
    })
    return (
      <div className="App">
        <ol>
          <li>React Assignment</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus pharetra ante a tempor. Integer blandit leo tincidunt felis dapibus,</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus pharetra ante a tempor. Integer blandit leo tincidunt felis dapibus,</li>
        </ol>
        <hr />
        <input 
        type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
