import React from "react";
import PageOne from "./PageOne";
import SecondPage from "./SecondPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecondPage />} />
          <Route path="/first" element={<SecondPage />} />
          <Route path="/second" element={<PageOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
