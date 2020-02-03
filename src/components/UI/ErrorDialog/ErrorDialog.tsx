import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import React from "react";

export interface IErrorDialogProps {
  open: boolean;
  title: any;
  description: any;
  onClose: any;
}

const ErrorDialog: React.FC<IErrorDialogProps> = (props: IErrorDialogProps) => (
  <Dialog open={props.open}>
    <DialogTitle>{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{props.description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={props.onClose} autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
export default ErrorDialog;
