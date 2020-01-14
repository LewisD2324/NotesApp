import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import classes from "./MaterialToolbar.module.css";

import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MaterialDrawer from "../MaterialDrawer/MaterialDrawer";
import NotesLogo from "../../../assets/images/notes-icon-png-14.jpg";

const AuthToolbar = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          //className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        ></IconButton>
        <Typography variant="h6" noWrap>
          Notes App
        </Typography>
        <img
          src={NotesLogo}
          style={{ maxHeight: "40px", minWidth: "auto" }}
        ></img>
      </Toolbar>
    </AppBar>
  </div>
);

export default AuthToolbar;
