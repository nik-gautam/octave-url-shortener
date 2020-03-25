import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUrl, editUrl } from "../actions/index";

class UrlCard extends Component {
  state = {
    edit: false,
    delete: false,
    newLongUrl: "",
    newUrlCode: "",
    isEdited: false
  };

  componentDidMount() {
    this.setState({ newLongUrl: this.props.longurl });
    this.setState({ newUrlCode: this.props.code });
  }

  displayInputGroup = url => {
    return (
      <div className="">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              LongUrl
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Longurl"
            aria-label="Lorgurl"
            aria-describedby="basic-addon1"
            value={this.props.longurl}
            readOnly
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">www.octavemusic.tk/</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Code"
              value={this.props.code}
              readOnly
            />
          </div>
        </div>
      </div>
    );
  };

  editInputGroup = url => {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              LongUrl
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Longurl"
            aria-label="Lorgurl"
            aria-describedby="basic-addon3"
            value={this.state.newLongUrl}
            onChange={e => {
              this.setState({ newLongUrl: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">www.octavemusic.tk/</div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Code"
              value={this.state.newUrlCode}
              onChange={e => {
                this.setState({ newUrlCode: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  editButtonDisplay = () => {
    return (
      <div className="row">
        <div className="col-6" style={{ textAlign: "center" }}>
          <button
            className="btn btn-warning"
            onClick={() => this.setState({ edit: false })}
          >
            Cancel
          </button>
        </div>
        <div className="col-6 text" style={{ textAlign: "center" }}>
          <button
            onClick={this.handleEdit.bind(
              this,
              this.props.id,
              this.state.newUrlCode,
              this.state.newLongUrl
            )}
            className="card-button btn btn-danger"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  normalButtonDisplay = () => {
    let currentComponent = this;

    return (
      <div className="row">
        <div className="col-6" style={{ textAlign: "center" }}>
          <button
            onClick={() => currentComponent.setState({ edit: true })}
            className="card-button btn btn-warning"
          >
            Edit
          </button>
        </div>

        <div className="col-6" style={{ textAlign: "center" }}>
          <button
            onClick={this.handleDelete.bind(this, this.props.id)}
            className="card-button btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  handleDelete = id => {
    // console.log(id);

    this.props.deleteUrl(id);

    window.location.reload(false);
  };

  handleEdit = (id, code, longurl) => {
    // console.log(id + " " + code + " Deleted");

    this.props.editUrl(id, longurl, code);

    window.location.reload(false);

    this.setState({ edit: true });
  };

  render() {
    // console.log(this.props);

    let inputBody;
    let editButton;

    if (this.state.edit === true) {
      inputBody = this.editInputGroup;
      editButton = this.editButtonDisplay;
    } else {
      inputBody = this.displayInputGroup;
      editButton = this.normalButtonDisplay;
    }
    return (
      <div className="card mx-auto" style={{ width: "23rem" }}>
        <div className="card-body">
          <div className="card-title row">
            <div className="col-8">{this.props.code}</div>
            <div className="col-1">
              <a
                className="btn"
                href={this.props.longurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-external-link-square" />
              </a>
            </div>
            <div className="col-1">
              <button
                className="btn"
                onClick={() => {
                  navigator.clipboard.writeText(this.props.shorturl);
                }}
              >
                <i className="fa fa-copy"></i>
              </button>
            </div>
          </div>

          {inputBody()}

          <hr />

          {editButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { urls: state.urls };
};

export default connect(mapStateToProps, { deleteUrl, editUrl })(UrlCard);
