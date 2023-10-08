import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Box, Heading, Text, Stack } from "../base-components";
import { Flex, Spacer, Image } from "@chakra-ui/react";

import LinkedinLogo from "../images/linkedin-logo.png";
import GitHubLogo from "../images/github.png";

const Header = ({ siteTitle }) => {
  return (
    <Box as="header" backgroundColor="#14213D" marginBottom={3}>
      <Box margin="0 auto" paddingY={3} paddingX={5}>
        <Heading as="h2" margin="0" p="20px">
          <Flex>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Stack direction="row" p="0" spacing="2px">
                <Text color="#FCA311" margin="0">
                  {"<"}
                </Text>
                <Text fontSize="md" margin="0">
                  {siteTitle}
                </Text>
                <Text color="#FCA311" margin="0">
                  {"/>"}
                </Text>
              </Stack>
            </Link>
            <Spacer />
            <Stack direction="row" spacing="36px">
              <Link
                style={{ color: "#999", textDecoration: "none" }}
                href="https://www.linkedin.com/in/laudair-egevarth/"
                isExternal
              >
                <Image boxSize="40px" src={LinkedinLogo} alt="Linkedin Logo" />
              </Link>
              <Link
                style={{ color: "#999", textDecoration: "none" }}
                href="https://github.com/Laudair"
                isExternal
              >
                <Image boxSize="40px" src={GitHubLogo} alt="GitHub Logo" />
              </Link>
            </Stack>
          </Flex>
        </Heading>
      </Box>
    </Box>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
