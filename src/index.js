import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/metropolis/Metropolis-Bold.woff";
import "./fonts/metropolis/Metropolis-Bold.woff2";
import "./fonts/lora/lora-v14-latin-regular.woff";
import "./fonts/lora/lora-v14-latin-regular.woff2";
import "./fonts/lora/lora-v14-latin-700.woff";
import "./fonts/lora/lora-v14-latin-700.woff2";
import "./fonts/lora/lora-v14-latin-italic.woff";
import "./fonts/lora/lora-v14-latin-italic.woff2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
