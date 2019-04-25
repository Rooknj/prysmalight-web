import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Typography } from "@material-ui/core";

const RenameLightDialog = props => {
  const { open, onClose, loading, error, onRenameLight, light } = props;

  const [lightName, setLightName] = React.useState(light.name);

  const handleChange = e => {
    setLightName(e.target.value);
  };

  const handleSubmit = () => {
    onRenameLight(lightName);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
    >
      <DialogTitle id="simple-dialog-title">Rename {light.name}</DialogTitle>
      <DialogContent>
        {error && (
          <Typography variant="body2" color="error">
            *Error renaming {light.name}
          </Typography>
        )}
        <DialogContentText>Enter a new name for {light.name}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="lightName"
          label="Light Name"
          type="text"
          fullWidth
          value={lightName}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          Rename
        </Button>
      </DialogActions>
    </Dialog>
  );
};

RenameLightDialog.propTypes = {
  onClose: PropTypes.func
};

export default RenameLightDialog;
