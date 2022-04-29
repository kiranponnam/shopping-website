import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
export default function ConfirmDialog(props: any) {
  const [open, setOpen] = useState(props.open);
  const [dialogContentText, setDialogContentText] = React.useState(
    props.dialogContentText
  );
  const title = props.title || "Are you sure to delete ?";

  useEffect(() => {
    setOpen(props.open);
    setDialogContentText(props?.dialogContentText);
  }, [props?.dialogContentText, props.open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={props.onConfirm}
        aria-labelledby="are you sure to delete"
      >
        <DialogTitle id="confirm-dialog">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContentText ? dialogContentText : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => props.onConfirm("cancel")}
            variant="outlined"
            color="secondary"
            style={{background:'#ffff'}}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => props.onConfirm("confirm")}
            color="primary"
            variant="contained"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
