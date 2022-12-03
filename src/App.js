import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Layout />>
            <Route index element=<Home /> />
            <Route path="/gallery" element=<Gallery /> />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
