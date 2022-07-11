import React, { useState, useEffect } from "react";
import "./App.css";

// 1. memo() => Higher Order Component (HOC)
// 2. useCallback()

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="App">{count}</div>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App;
