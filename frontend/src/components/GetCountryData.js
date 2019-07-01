import React from 'react';
import axios from 'axios';
import Country from './Country'

class GetCountryData extends React.Component {
  state = {country: null}
  async componentDidMount() {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`)
    this.setState({
      country: response.data[0]
    })
  }
  render() {
    const { country } = this.state
    if (!country) {
      return null
    }
    return (
      <Country country={country} />
    )
  }
}

export default GetCountryData