import React, { Component } from "react";

import jwt_decode from "jwt-decode";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);

    this.setState({
      username: decoded.username,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto"></div>

          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Welcome {this.state.username}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
