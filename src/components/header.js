import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading, Text, Stack } from '../base-components'
import { Flex, Spacer } from '@chakra-ui/react'

const Header = ({ siteTitle }) => (
  <Box as="header" backgroundColor="#14213D" marginBottom={3}>
    <Box margin="0 auto" paddingY={3} paddingX={5}>
      <Heading as="h2" margin="0" p="20px">
        <Flex>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Stack direction="row" p="0" spacing="2px">
              <Text color="#FCA311" margin="0">
                {'<'}
              </Text>
              <Text fontSize="md" margin="0">
                {siteTitle}
              </Text>
              <Text color="#FCA311" margin="0">
                {'/>'}
              </Text>
            </Stack>
          </Link>
          <Spacer />
          <Stack direction="row" spacing="36px">
            <Link
              to="/"
              m={4}
              style={{
                color: 'white',
                textDecoration: 'none',
                ':hover': {color: "red", textDecoration: "underline"},
                ':visited': {
                  color: 'purple'
               }
                
              }}
            >
              <Text fontSize="24px" margin={2}>
                About
              </Text>
            </Link>
            <Link
              to="/"
              m={4}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fontSize="24px" m={2}>
                Skills
              </Text>
            </Link>
            <Link
              to="/"
              m={4}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fontSize="24px" margin={2}>
                Portfolio
              </Text>
            </Link>
            <Link
              to="/"
              m={4}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Text fontSize="24px" margin={2}>
                Contact
              </Text>
            </Link>
          </Stack>
        </Flex>
      </Heading>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
