import "react-hot-loader";
import React from "react";
import { hot } from "react-hot-loader/root";

import ReactDOM from "react-dom";

import App from "./App";

const render = (Component) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
