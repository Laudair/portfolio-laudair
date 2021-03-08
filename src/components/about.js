import React from 'react'

import { Box, Text, Button } from '../base-components'

import './layout.css'

const About = () => {
  return (
    <Box m="42px">
      <Text as="span" fontSize="18px" fontWeight="bold" color="#FCA311">
        WEB DEVELOPER
      </Text>
      <Box as="h1" color="#e5e5e5">
        Hi, I &apos;m Laudair
      </Box>
      <Box as="p" color="#e5e5e5" w="420px">
        {' '}
        Enthusiastic developer with positive, team-oriented attitude, and
        excellent communication skills looking forward to joining a fast-growing
        organization.
      </Box>
      <Button
        borderColor="#FCA311"
        variant="outline"
        backgroundColor="#14213D"
        fontSize="16px"
        color="#FCA311"
      >
        DOWNLOAD RESUME
      </Button>
    </Box>
  )
}

export default About
