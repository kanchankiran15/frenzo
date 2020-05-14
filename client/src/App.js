import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components";
import { Home } from "./conatiner/Home";
import { Login } from "./conatiner/Login";
import { Register } from "./conatiner/Register";
import { Container, Alert } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
    //  const [show, setShow] = useState(true);
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        {alert.message && (
          <Alert dismissible className={`alert ${alert.type}`}>
            {alert.message}
          </Alert>
        )}
        <Router history={history}>
          <PrivateRoute exact path="/" component={Home} />
          <Container>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Container>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App };

export default connect(mapStateToProps)(App);
