import "./App.css";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Privacy from "./privacy"
import Welcome from "./welcomepage/Welcome";
import { Routes, Route } from "react-router-dom";
import { Terms } from "./terms";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} exact />
          <Route path="/privacy" element={<Privacy/>} exact />
          <Route path="/terms" element={<Terms/>} exact />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
