import React from 'react';

import {Image, Link} from '@chakra-ui/react'
import { Box, Stack} from '../base-components'

import LinkedinLogo from "../images/linkedin-logo.png"

const Contact = () => {
  return (
    <Box marginTop="42px" align="center"  >
      <Box as="h3" color="#e5e5e5">CONTACT</Box>
      <Stack direction='row'>
      <Image boxSize="40px"src={LinkedinLogo} alt="Linkedin Logo"/>
      <Link  style={{ color: '#999', textDecoration: 'none', margin:'8px'}}href="https://www.linkedin.com/in/laudair-egevarth/" isExternal>
      www.linkedin.com/in/laudair-egevarth
     </Link>
     </Stack>
    </Box>
  )
}

export default Contact
