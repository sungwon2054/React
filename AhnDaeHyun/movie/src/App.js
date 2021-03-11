import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  // 직접 state를 사용하지 않고 arrow function을 통해 state값을 사용할 수 있음.
  add = () => {
    this.setState(current => ({ count: current.count + 1 }) );
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }) );
  }

  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>

    )
  }
}

export default App;
