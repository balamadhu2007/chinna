import React from 'react'
import Badge from './Badge'
import Card from './Card'
const App = () => {
  return (
    <center>
    <div>
      <h1>madhu</h1>
      <Badge/>
      <Card/>
    </div>
    </center>
  )
}

export default App

         //using  redux without redux-extracting reducer
/*import React, { Component } from 'react';

/*const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

class App extends Component {
  state = counter(undefined, {});
  
  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };
  
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )

}
export default App*/

         //using  redux without redux-local-state
  
/*import React, { Component } from 'react';

class App extends Component {
   
 
 
state = { value: 0 };

      
   
  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 2
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 2
    }));
  };
  
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
export default App*/


