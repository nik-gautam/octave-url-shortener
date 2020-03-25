import React, { Component } from "react";

export default class UrlToast extends Component {
  render() {
    return (
      <div>
        fsjahjladhs
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="mr-auto">Alert!!</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Short URL Created.
            <a href={this.props.shorturl}> {this.props.shorturl} </a>
          </div>
        </div>
      </div>
    );
  }
}
