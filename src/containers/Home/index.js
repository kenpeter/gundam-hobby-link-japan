import React, { Component } from "react";
import { connect } from "react-redux";
/* eslint-disable import/no-named-default */
import { default as HomeComponent } from "../../components/Home";
import { loadHomeAPI, likeitAPI } from "../../reducers/home";

class Home extends Component {
  componentDidMount() {
    /* eslint-disable react/destructuring-assignment */
    this.props.loadHomeAPIProps("");
  }

  handleRefresh = () => {
    this.props.loadHomeAPIProps("");
  };

  likeit = id => {
    this.props.likeitAPIProps(id);
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <HomeComponent
            data={data}
            handleRefresh={this.handleRefresh}
            likeit={this.likeit}
          />
        )}
      </div>
    );
  }
}

Home.defaultProps = {
  data: []
};

const mapStateToProps = state => {
  return {
    data: state.homeReducer.data
  };
};

const mapDispatchToProps = dispatch => ({
  loadHomeAPIProps: id => dispatch(loadHomeAPI(id)),
  likeitAPIProps: id => dispatch(likeitAPI(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
