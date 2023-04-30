// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { worker } from "./mocks/browser";
import App from "./App";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
