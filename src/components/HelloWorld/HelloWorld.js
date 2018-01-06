import React from 'react'
import PropTypes from 'prop-types' // Own package since React 16

function HelloWorld({message}) {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  message: PropTypes.string,
}

export default HelloWorld
