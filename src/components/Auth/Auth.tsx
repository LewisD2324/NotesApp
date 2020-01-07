import React from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";

interface ISignUpProps {
  password: any;
  email: any;
  authenticate: any;
}

const Auth = (props: ISignUpProps) => (
  <Box>
    <TextField
      id="outlined-basic"
      label="Email"
      type="email"
      variant="outlined"
      onChange={props.email}
    />
    <TextField
      id="outlined-basic"
      label="Password"
      type="password"
      variant="outlined"
      onChange={props.password}
    />
    <Button onClick={props.authenticate}>SUBMIT</Button>
  </Box>
);

export default Auth;
