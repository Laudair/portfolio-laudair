import React from "react";
import { Text as ChakraText } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Text = ({ children, ...otherProps }) => {
  return <ChakraText {...otherProps}>{children}</ChakraText>;
};

Text.propTypes = {
  children: PropTypes.node,
};

Text.defaultProps = {
  children: null,
};

export default Text;
