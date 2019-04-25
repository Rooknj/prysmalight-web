import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Typography } from "@material-ui/core";

const ManualView = props => {
  const { onAddLight, onBack, addLightLoading, addLightError } = props;

  const [lightId, setLightId] = React.useState("");
  const [oldId, setOldId] = React.useState("");

  const handleChange = e => {
    setLightId(e.target.value);
  };

  const handleSubmit = () => {
    setOldId(lightId);
    onAddLight(lightId);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <React.Fragment>
      <DialogContent>
        {addLightError && (
          <Typography variant="body2" color="error">
            *Error adding {oldId}
          </Typography>
        )}
        <DialogContentText>
          Enter the unique id of the light you want to add
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="lightName"
          label="Light Id"
          type="text"
          fullWidth
          value={lightId}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={addLightLoading}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onBack} color="primary" disabled={addLightLoading}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={addLightLoading}
        >
          Add Light
        </Button>
      </DialogActions>
    </React.Fragment>
  );
};

ManualView.propTypes = {
  onClose: PropTypes.func
};

export default ManualView;
