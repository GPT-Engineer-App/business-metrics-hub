import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

function Login() {
  return (
    <Box p={5}>
      <Heading>Login</Heading>
      <Input placeholder="Email" mb={3} />
      <Input placeholder="Password" type="password" mb={3} />
      <Button colorScheme="teal">Login</Button>
    </Box>
  );
}

export default Login;
