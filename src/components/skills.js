import React from 'react';

import ReactLogo from "../images/react-logo.png"
import GatsbyLogo from '../images/gatsby-icon.png'
import HtmlLogo from '../images/html-logo.png'
import CssLogo from '../images/css-logo.png'
import JsLogo from '../images/js-logo.png'

import { Box} from '../base-components'
import { Image, SimpleGrid, Stack, Grid } from "@chakra-ui/react"


const Skills = () => {
  return (
    <Box marginTop="68px" align="center"  >
      
      <Box as="h3" color="#e5e5e5">SKILLS</Box>
      <SimpleGrid columns={{ sm: 3, md: 5 }} gap={8}>
        <Image boxSize="100px"src={HtmlLogo} alt="Html Logo"/>
        <Image boxSize="90px"src={CssLogo} alt="Css Logo"/>
        <Image boxSize="100px"src={JsLogo} alt="Js Logo"/>
        <Image boxSize="100px"src={ReactLogo} alt="React Logo"/>
        <Image boxSize="90px"src={GatsbyLogo} alt="Gatsby Logo"/>
        </SimpleGrid>
    </Box>
  )
}

export default Skills
