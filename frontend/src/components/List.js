import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const renderCountries = (countryList) => {
  return countryList.map((country, index) => {
    return <Link key={index} to={`/country/${country.name}`}><h1>{country.name}</h1></Link>
  })
}

const List = (props) => {
  const {countriesList, authentication} = props
  const result = renderCountries(countriesList)
  if (!authentication) {
    return <Redirect to="/login" />
  } else {
    return (
      <div>
        {result}
      </div>
    )
  }
}

export default List;