import React from "react";
import "./App.css";
import { Diagram } from "./components/Diagram";

const App = () => {
  return (
    <div className="App container mx-auto p-7 h-screen">
      <h1 className="text-3xl font-bold underline">Checkmarx board</h1>
      <Diagram />
    </div>
  );
};

export default App;
