import React from 'react'

import { Box, Text, Button } from '../base-components'
import { Link} from '@chakra-ui/react'

import './layout.css'

const About = () => {
  return (
    <Box marginTop="28px" align='center'>
      <Text as="span" fontSize="18px" fontWeight="bold" color="#FCA311">
        WEB DEVELOPER
      </Text>
      <Box as="h1" color="#e5e5e5">
        Hi, I&apos;m Laudair
      </Box>
      <Box as="p" color="#e5e5e5" w={{sm:"90%", md:"420px"}}>
        {' '}
        Enthusiastic developer with positive, team-oriented attitude, and
        excellent communication skills looking forward to joining a fast-growing
        organization.
      </Box>

      <Link  style={{ color: '#999', textDecoration: 'none', margin:'8px'}}href="https://drive.google.com/file/d/1qoigKNMSxEDMxXI2DKANiZmO80SdFFmc/view?usp=sharing" isExternal>
      <Button
        borderColor="#FCA311"
        variant="outline"
        backgroundColor="#14213D"
        fontSize="16px"
        color="#FCA311"
      >
        DOWNLOAD RESUME
      </Button>
      </Link>
    </Box>
  )
}

export default About
