import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api");
      const res = await data.json();
      setData(res.message);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{isLoading ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
