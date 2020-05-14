import React, { Component } from "react";
import { connect } from "react-redux";

import { userActions } from "../../actions";
import Dashboard from "../Dashboard";
import imgGiphy from "../../img/giphy.gif";
import NavBar from "../../components/navBar";

import SideBar from "../../components/sideBar";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.myProfile(this.props.user.id)); ////userActions.getAll()
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const {} = this.props;

    return (
      <div
        className="imgStyle minHeight650"
        style={{ backgroundImage: `url(${imgGiphy})` }}
      >
        <NavBar userData={this.props.user} />

        <div className="row container-fluid col-lg-12">
          <SideBar userData={this.props.user} />
          <Dashboard userProp={this.props} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;

  return {
    user,
    //  users,
  };
}

const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as Home };
