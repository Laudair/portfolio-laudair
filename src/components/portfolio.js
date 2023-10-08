import React from "react";

import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "../base-components";

const Portfolio = () => {
  return (
    <Box marginTop="42px" align="center">
      <Box as="h3" color="#e5e5e5">
        PORTFOLIO
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={12}>
        <Box
          w={{ sm: "100%", md: "300px" }}
          h="300px"
          backgroundColor="white"
        ></Box>
        <Box
          w={{ sm: "100%", md: "300px" }}
          h="300px"
          backgroundColor="white"
        ></Box>
        <Box
          w={{ sm: "100%", md: "300px" }}
          h="300px"
          backgroundColor="white"
        ></Box>
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
