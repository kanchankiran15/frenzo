import React from "react";
import "../styles/style.css";
import noUsers from "../img/noUser.gif";
import userImg from "../img/imgDSC.JPG";
import { Card, CardBody } from "reactstrap";

const SideBar = (props) => {
  let userName;
  if (props.userData) {
    userName = props.userData.firstName + " " + props.userData.lastName;
  }

  return (
    <div className="col-sm-3 ">
      <Card>
        {/* <CardHeader></CardHeader> */}
        <CardBody style={{ padding: 0 }}>
          <div className="text-center">
            <img
              className="col-lg-12 profile"
              alt="profile"
              src={userImg}
            ></img>
          </div>
          <h3 className="ml-1">{userName}</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default SideBar;
