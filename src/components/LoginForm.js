import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password : ""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.props.onSubmit(username, password);
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" 
            type="text" 
            value = {this.state.username}
            onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
            type="password" 
            value = {this.state.password}
            onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit"
            onSubmit={this.handleFormSubmit}>
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
