import React from "react";
import Nav from "./componants/Nav";
import Front from "./componants/Front";
import Footer1 from "./componants/Footer";

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
