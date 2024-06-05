import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box p={5}>
      <Heading>Welcome to DDData</Heading>
      <Text>DDData is a business metric admin site that can integrate with other data sources.</Text>
    </Box>
  );
}

export default LandingPage;
