import React from "react";

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Food fav="kimchi"/>
      <Food fav="apple"/>
      <Food fav="banana"/>
      <Food fav="rice"/>
    </div>
  );
}

export default App;
