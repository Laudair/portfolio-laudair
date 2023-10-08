import React from "react";

import { Image, Link } from "@chakra-ui/react";
import { Box, Stack } from "../base-components";

import LinkedinLogo from "../images/linkedin-logo.png";

import Email from "../images/envelope.png";

const Contact = () => {
  return (
    <Box marginTop="42px" align="center">
      <Box as="h3" color="#e5e5e5">
        CONTACT
      </Box>
      <Stack direction="row" m={2} w={{ sm: "100%", md: "400px" }}>
        <Image
          boxSize="40px"
          src={LinkedinLogo}
          alt="Linkedin Logo"
          margin="0px"
        />
        <Link
          style={{ color: "#999", textDecoration: "none", margin: "8px" }}
          href="https://www.linkedin.com/in/laudair-egevarth/"
          isExternal
        >
          www.linkedin.com/in/laudair-egevarth
        </Link>
      </Stack>
      <Stack direction="row" m={2} w={{ sm: "100%", md: "400px" }}>
        <Image boxSize="48px" src={Email} alt="Email" margin="0px" />
        <Link
          style={{ color: "#999", textDecoration: "none", margin: "8px" }}
          href="mailto:laudair.egevarth@hotmail.com"
          isExternal
        >
          laudair.egevarth@hotmail.com
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
