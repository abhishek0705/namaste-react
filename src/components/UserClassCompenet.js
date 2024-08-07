import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhishek0705");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo || {};

    return (
      <div className="user-card">
        <img src={avatar_url} style={{ width: 100 }} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;
