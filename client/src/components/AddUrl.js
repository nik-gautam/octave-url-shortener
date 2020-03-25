import React from "react";
import { connect } from "react-redux";

import UrlToast from "./UrlToast";
import { addUrl } from "../actions/index";

class AddUrl extends React.Component {
  state = {
    urlCode: "",
    longUrl: "",
    is_longUrl: true,
    is_created: false,
    shortUrl: ""
  };

  handleLongUrlChange = e => {
    this.setState({ longUrl: e.target.value });
  };

  handleUrlCodeChange = e => {
    this.setState({ urlCode: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state.longUrl + " " + this.state.urlCode);

    this.props.addUrl(this.state.longUrl, this.state.urlCode);
  };

  showToast = () => {
    if (this.state.is_created) {
      return <UrlToast shorturl={this.state.shortUrl} />;
    }
  };

  render() {
    // console.log(this.props);

    return (
      <div className="">
        {/* <UrlToast /> */}

        <div className="mt-4" style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus-circle fa-2x"></i>
          </button>

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Add New Url
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-row ">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Enter Long Url Here"
                          name="longurl"
                          onChange={this.handleLongUrlChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              www.octavemusic.tk/
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Custom Code"
                            name="urlcode"
                            onChange={this.handleUrlCodeChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleSubmit.bind(this)}
                        data-dismiss="modal"
                      >
                        Shorten
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.showToast()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { short: state.short };
};

export default connect(mapStateToProps, { addUrl })(AddUrl);
