import React from "react";
import Nav from "./componants/Nav";
import Front from "./componants/Front";

function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      <Nav />
      <Front />
    </div>
  );
}

export default App;
