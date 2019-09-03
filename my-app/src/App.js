import React from 'react';
import axios from 'axios';

import UserData from './components/UserData';
import FollowersData from './components/FollowersData';

import './App.css';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }
  
  getUserData = () => {
    axios 
      .get('https://api.github.com/users/sara-alkhamri')
      .then(res => {
        console.log(res.data);
        this.setState({...this.state.data, user: res.data})
      })
      .catch(err => {
        console.log('error!')
      })
  }

  getFolllowerData = () => {
    axios
      .get('https://api.github.com/users/sara-alkhamri/followers')
      .then(res => {
        console.log(res.data);
        this.setState({...this.state.data, followers: res.data})
      })
      .catch(err => {
        console.log('error!')
      })
  }

  componentDidMount() {
    this.getUserData()
    this.getFolllowerData()
  }

  render() {
    return (
      <div className="App">
      <h1>Github Card</h1>
      <UserData userProps={this.state.user} />
      <FollowersData followersProps={this.state.followers} />
      </div>
    )
  }











}

export default App;
