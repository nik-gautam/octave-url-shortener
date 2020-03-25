import React, { Component } from "react";

import UrlCard from "./UrlCard";
import { connect } from "react-redux";

import { fetchUrls, editUrl } from "../actions/index";

class UrlList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchUrls();
  }

  renderList() {
    const { urls } = this.props;

    // console.log(this.props);
    return urls.reverse().map(url => {
      return (
        <React.Fragment key={url._id}>
          <div className="col-sm-6 mb-2">
            <UrlCard
              code={url.urlCode}
              longurl={url.longUrl}
              shorturl={url.shortUrl}
              id={url._id}
            />
          </div>
        </React.Fragment>
      );
    });

    // return <div className="">Hllo</div>;
  }

  render() {
    // console.log(this.props.urls);
    return <div className="row">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { urls: state.urls };
};

export default connect(mapStateToProps, { fetchUrls, editUrl })(UrlList);
