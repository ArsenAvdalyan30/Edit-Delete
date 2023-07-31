import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

class EditDialog extends Component {
  render() {
    return (
      <Dialog
        open={true}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit todo</DialogTitle>
        <DialogContent>{this.props.content}</DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose}>Cancel edit</Button>
          <Button onClick={this.props.onEdit} autoFocus>
            Edit item
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default EditDialog;
