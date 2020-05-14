import React, { Component } from "react";
import { ButtonGroup } from "reactstrap";
import { userActions } from "../actions/userAction";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userProp.user,
      submitted: false,
      isEdit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    //event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props.userProp;
    if (user.firstName && user.lastName) {
      // saveuserdeatils
      dispatch(userActions.saveUserDetail(user));
      localStorage.setItem("user", JSON.stringify(user));

      this.setState({ isEdit: false });
    }
  }
  handleEdit(event) {
    this.setState({ isEdit: true });
  }
  handleCancel(event) {
    this.setState({ isEdit: false, user: this.props.userProp.user });
  }

  render() {
    const { user, submitted, isEdit } = this.state;

    return (
      <div>
        {!isEdit ? (
          <button
            className="btn seaLightGreen ml6"
            onClick={() => this.handleEdit()}
          >
            <EditIcon style={{ color: "seashell" }} />
          </button>
        ) : (
          <ButtonGroup>
            <button
              className="btn seaLightGreen ml6"
              onClick={() => this.handleSubmit()}
            >
              <SaveIcon style={{ color: "seashell" }} />
            </button>
            <button
              className="btn btn-danger ml6"
              onClick={() => this.handleCancel()}
            >
              <CancelIcon style={{ color: "seashell" }} />
            </button>
          </ButtonGroup>
        )}

        {!isEdit ? (
          labelDiv(user)
        ) : (
          <div className="pd-20 mt-2">
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="firstName">First Name (*)</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="firstName"
                        value={user.firstName}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.firstName && (
                        <div className="help-block">First Name is required</div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="email">Email (*)</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="email"
                        value={user.username}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.username && (
                        <div className="help-block">Email is required</div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="country">Country</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="country"
                        value={user.country}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="city">City</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="city"
                        value={user.city}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="phone"
                        value={user.phone}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="lastName">Last Name (*)</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="lastName"
                        value={user.lastName}
                        onChange={this.handleChange}
                      />
                      {submitted && !user.firstName && (
                        <div className="help-block">Last Name is required</div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="birthday">Birthday</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="birthday"
                        value={user.birthday}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="state"
                        value={user.state}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="pincode">PinCode</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="number"
                        maxlength="6"
                        className="form-control cursive"
                        name="pincode"
                        value={user.pincode}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <label htmlFor="intrest">Intrest</label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control cursive"
                        name="intrest"
                        value={user.intrest}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const labelDiv = (user) => (
  <div className="pd-20">
    <form name="form">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="firstName">
                {user.firstName}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="email">
                {user.username}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="country">
                {user.country}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="city">City</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="city">
                {user.city}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="phone">
                {user.phone}
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="lastName">
                {user.lastName}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="birthday">Birthday</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="birthday">
                {user.birthday}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="state">State</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="state">
                {user.state}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="pincode">PinCode</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="pincode">
                {user.pincode}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="intrest">Intrest</label>
            </div>
            <div className="col-lg-8">
              <label className="cursive" htmlFor="intrest">
                {user.intrest}
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default MyProfile;
