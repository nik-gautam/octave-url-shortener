import React from "react";

import Navbar from "../layouts/Navbar";
import AddUrl from "./AddUrl";
import UrlList from "./UrlList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <AddUrl />
        <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />

        <div className="container">
          <UrlList />
        </div>
      </div>
    );
  }
}

export default App;
