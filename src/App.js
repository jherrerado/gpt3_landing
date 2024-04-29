import React from "react";

import {
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
} from "./containers/index.js";
import { Brand, CTA, Navbar } from "./components/index.js";
import "./index.css";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
