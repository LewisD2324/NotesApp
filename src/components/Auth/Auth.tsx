import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Container,
  Paper,
  Avatar,
  Typography
} from "@material-ui/core";
import classes from "./Auth.module.css";

interface ISignUpProps {
  handlePasswordChange: any;
  handleEmailChange: any;
  authenticate: React.MouseEventHandler;
  authmethod: string;
  errormessage: string;
}

const Auth: React.FC<ISignUpProps> = (props: ISignUpProps) => (
  <Container component="main" maxWidth="xs">
    <Paper className={classes.Paper}>
      <Avatar className={classes.Avatar}></Avatar>
      <Typography component="h1" variant="h5">
        {props.authmethod}
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        onChange={props.handleEmailChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onChange={props.handlePasswordChange}
      />

      <Typography component="p" className={classes.ErrorText}>
        {props.errormessage}
      </Typography>

      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={props.authenticate}
      >
        SUBMIT
      </Button>
    </Paper>
  </Container>
);

export default Auth;
