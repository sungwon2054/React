import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    time: 5000,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, this.state.time);
    setInterval(() => {
      this.setState((current) => ({ time: current.time - 1000 }));
    }, 1000);
  }

  render() {
    const { isLoading, time } = this.state;
    return (
      <div>
        <h2>{isLoading ? "Loading..." : "We are ready"}</h2>
        <h3>{isLoading ? time / 1000 : ""}</h3>
      </div>
    );
  }
}

export default App;
