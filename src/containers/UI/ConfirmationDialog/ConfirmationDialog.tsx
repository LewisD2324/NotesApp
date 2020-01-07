import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import React from "react";

export interface IConfirmationDialogProps {
  open: boolean;
  title: any;
  //variant: any;
  description: any;
  onSubmit: any;
  onClose: any;
}

const ConfirmationDialog = (props: IConfirmationDialogProps) => (
  <Dialog open={props.open}>
    <DialogTitle>{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{props.description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={props.onSubmit}>
        YES
      </Button>
      <Button color="primary" onClick={props.onClose} autoFocus>
        CANCEL
      </Button>
    </DialogActions>
  </Dialog>
);
export default ConfirmationDialog;
