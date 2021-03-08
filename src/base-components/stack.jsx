import React from 'react'
import { Stack as ChakraStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Stack = ({ children, ...otherProps }) => {
  return <ChakraStack {...otherProps}>{children}</ChakraStack>
}

Stack.propTypes = {
  children: PropTypes.node,
}

Stack.defaultProps = {
  children: null,
}

export default Stack
