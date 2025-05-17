import React from "react";
import Nav from "./components/Nav";
import Front from "./components/Front";
import Footer1 from "./components/Footer";

function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      <Nav />
      <Front />
      <Footer1/>
    </div>
  );
}

export default App;
