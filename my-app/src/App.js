import React from 'react';
import axios from 'axios';

import './App.css';

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
      
      </div>
    )
  }











}

export default App;
