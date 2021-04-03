import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Page2 } from "./page_2";
import { Page4 } from "./page_4";

export class Even extends React.Component {
  render() {
    return (
      <div>
        <Route>
          <Link>
            <Page2 />
            <Page4 />
          </Link>
        </Route>
      </div>
    );
  }
}
