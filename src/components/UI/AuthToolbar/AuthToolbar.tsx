import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import NotesLogo from "../../../assets/images/notes-icon-png-14.jpg";

const AuthToolbar: React.FC = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        ></IconButton>
        <Typography variant="h6" noWrap>
          Notes App
        </Typography>
        <img
          src={NotesLogo}
          alt="Notes App"
          style={{ maxHeight: "40px", minWidth: "auto" }}
        ></img>
      </Toolbar>
    </AppBar>
  </div>
);

export default AuthToolbar;
