import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Page1 } from "./page_1";
import { Page2 } from "./page_2";
import { Page3 } from "./page_3";
import { Page4 } from "./page_4";

export class All extends React.Component {
  render() {
    return (
      <div>
        <Route>
          <Link>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
          </Link>
        </Route>
      </div>
    );
  }
}
