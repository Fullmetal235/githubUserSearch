import React, { Component } from "react";
import UserItem from "./userItem";
import Loading from "./../loading/loading.js";

export default class Users extends Component {
  render() {
    const { loading, users } = this.props;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className='container'>
        <div className='row'>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}