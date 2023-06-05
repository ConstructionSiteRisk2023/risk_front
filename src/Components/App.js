import React, { useState, useEffect }  from "react";
import Nav from "./Partials/Nav";
import Router from "./Router";

function App() {
  return (
    <div >
      <Nav/>
      <div><Router /></div>
    </div>
  );
}

export default App;
