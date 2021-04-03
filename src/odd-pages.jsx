import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Page1 } from "./page_1";
import { Page3 } from "./page_3";

export class Odd extends React.Component {
  render() {
    return (
      <div>
        <Route>
          <Link>
            <Page1 />
            <Page3 />
          </Link>
        </Route>
      </div>
    );
  }
}
