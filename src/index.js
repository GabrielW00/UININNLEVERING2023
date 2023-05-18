import React from "react";
import ReactDOM from "react-dom/client";       //Reactdom client for å rendere
import "./index.css";   //import css og app filene 
import App from "./App";
import reportWebVitals from "./reportWebVitals";   //parameter for nettstedet

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
