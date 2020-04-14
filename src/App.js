import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    users:
    [
      {username: "aman"},
      {username : "shivam"}
    ]
  }

  usernameChangeHandler = (event) =>{
    this.setState({
      users:[
        {username : event.target.value},
        {username : event.target.value}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput username={this.state.users[0].username} onChange={this.usernameChangeHandler}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
      </div>
    );
  }
}

export default App;
