import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyles";
import Landing from "./Landing"

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Landing />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Routes;
