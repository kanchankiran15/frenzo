import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { Card, CardBody, CardHeader } from "reactstrap";
class Notes extends Component {
  myNotes = [
    {
      id: 1,
      name: "Joe",
      CreatedOn: "3 Jun 2020",
    },
    {
      id: 2,
      name: "personal",
      CreatedOn: "1 Jun 2020",
    },
  ];
  render() {
    return (
      <div>
        <h1>Documnets </h1>
        {/* <Tooltip title="New Diary" placement="top">
          <button
            className="btn seaLightGreen "
            onClick={() => this.handleNewNote()}
          >
            <AddIcon style={{ color: "seashell" }} />
          </button>
        </Tooltip> */}
        <form name="form">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <td className="font-weight-bold">Name</td>
                <td className="font-weight-bold">CreatedOn</td>
                <td className="font-weight-bold">Download</td>
              </tr>
            </thead>
            {this.myNotes.map((s) => (
              <tr>
                <td>{s.name}</td>
                <td>{s.CreatedOn}</td>
                <td>
                  <Tooltip title="Download" placement="top">
                    <button
                      className="btn seaLightGreen "
                      onClick={() => this.handleNewNote()}
                    >
                      <CloudDownload style={{ color: "seashell" }} />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </table>
        </form>
      </div>
    );
  }
}

export default Notes;
