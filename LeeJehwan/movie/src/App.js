import React from "react";

function Food({ favourite }) {
  return <h3>I love {favourite}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favourite='kimbap' />
      <Food favourite='pizza' />
      <Food favourite='hamburger' />
      <Food favourite='ramen' />
    </div>
  );
}

export default App;
