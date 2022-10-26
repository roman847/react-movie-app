import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/about/AboutUs/AboutUs";
import NotFound from "./pages/notFound/NotFound/NotFound";
import Main from "./pages/main/Main";
import "./App.css";
import Form from "./pages/Form/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
