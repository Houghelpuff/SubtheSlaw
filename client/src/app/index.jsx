import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar, Header, SwitchWrapper } from "../components/";

import "../styles/main.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <SwitchWrapper />
    </Router>
  );
};

export default App;
