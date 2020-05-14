import React, { Fragment, Component } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";

import PropTypes from "prop-types";

export class Logout extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavLink onClick={logout} href="#"> */}
        <NavLink href="#"> Logout</NavLink>
      </Fragment>
    );
  }
}

export default Logout;
