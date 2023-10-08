import React from "react";
import { Heading as ChakraHeading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Heading = ({ children, ...otherProps }) => {
  return <ChakraHeading {...otherProps}>{children}</ChakraHeading>;
};

Heading.propTypes = {
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
