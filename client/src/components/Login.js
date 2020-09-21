import React, { Component } from "react";

import { login } from "./UserFunctions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",

      password: "",

      errors: {},
    };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,

      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/dashboard`);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

              <div className="form-group">
                <label htmlFor="username">User ID</label>

                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter User ID"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Log In
              </button>
              <p className="text-center">
                {" "}
                Don't have an Account? <a href="/register"> Sign Up Now!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
