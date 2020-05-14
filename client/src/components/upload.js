import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "get-id-from-somewhere",
      file: null,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData();
    formData.append("body", this.state.file);
    console.log(formData);
  }
  setFile(e) {
    this.setState({ file: e.target.files[0] });
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Upload Documents: In Progress..!</h1>
          <input
            className="btn"
            type="file"
            onChange={(e) => this.setFile(e)}
          />
          <button className="btn btn-info" type="submit">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
