import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {App} from "./components/App";
import {People} from "./components/components/People";
import{ NotFound} from './components/components/Not Found';
import {Planets} from './components/components/Planets';
import {Starships} from './components/components/Starships';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
