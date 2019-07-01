import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios';

class App extends React.Component {
  state = {countriesList: null, authentication: false}
  // get countries list data
  login = async (userCredentials) => {
    // console.log(userCredentials)
    // check the credentials
    try {
      const response = await axios.post('http://localhost:5000/auth/login', userCredentials)
      const token = response.data.token
      localStorage.setItem('token', token)
      this.setState({
        authentication: true
      })
    } catch(err) {
      this.setState({
        authentication: false,
        error: err
      })
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      const token = localStorage.getItem('token')
      const authentication = await axios.get('http://localhost:5000/user/current-user', {headers: { token: token }})
      this.setState({
        countriesList: response.data,
        authentication: true,
        currentUser: authentication.data
      })
    } catch(err) {
      console.log(err)
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      this.setState({
        countriesList: response.data,
        authentication: false
      })
    }
  }

  render() {
    const {countriesList, authentication} = this.state
    if (!countriesList) {
      return null
    } else {
      return (
        // pass that data to routes
        <Routes countriesList={countriesList} authentication={authentication} login={this.login} />
      )
    }
  }
}

export default App;