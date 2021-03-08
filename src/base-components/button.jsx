import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Button = ({ children, ...otherProps }) => {
  return <ChakraButton {...otherProps}>{children}</ChakraButton>
}

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}

export default Button
