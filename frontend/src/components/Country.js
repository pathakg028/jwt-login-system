import React from 'react';

const Country = (props) => {
  console.log(props)
  return (
    <>
      <img src={props.country.flag} alt="country"/>
      <h1>Country</h1>
      <h1>{props.country.name}</h1>
      <h1>Population</h1>
      <h1>{props.country.population} people</h1>
    </>
  )
}

export default Country;