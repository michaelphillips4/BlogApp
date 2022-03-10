import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogItem from "./Components/Blog/BlogItem";
import App from './App';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="AddBlog" element={<BlogItem />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

