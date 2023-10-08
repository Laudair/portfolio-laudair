import React from "react";
import { Box as ChakraBox } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Box = ({ children, ...otherProps }) => {
  return <ChakraBox {...otherProps}>{children}</ChakraBox>;
};

Box.propTypes = {
  children: PropTypes.node,
};

Box.defaultProps = {
  children: null,
};

export default Box;
