import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

function Register() {
  return (
    <Box p={5}>
      <Heading>Register</Heading>
      <Input placeholder="Email" mb={3} />
      <Input placeholder="Password" type="password" mb={3} />
      <Input placeholder="Confirm Password" type="password" mb={3} />
      <Button colorScheme="teal">Register</Button>
    </Box>
  );
}

export default Register;
