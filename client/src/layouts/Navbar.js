import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1 mx-auto">
            {" "}
            Octave URL Shortener{" "}
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
