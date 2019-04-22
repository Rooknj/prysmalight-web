import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const ManualView = props => {
  const { onAddLight, onBack, addLightLoading } = props;

  const [lightId, setLightId] = React.useState("");

  const handleChange = e => {
    setLightId(e.target.value);
  };

  const handleSubmit = () => {
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
        <DialogContentText>
          Enter the name of the light you want to add
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="lightName"
          label="Light Name"
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
