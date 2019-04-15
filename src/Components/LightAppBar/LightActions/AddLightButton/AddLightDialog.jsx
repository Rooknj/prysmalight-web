import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DiscoveredLightsView from "./DiscoveredLightsView";
import ManualView from "./ManualView";

const AddLightDialog = props => {
  const [view, setView] = React.useState(0);

  const { onClose, onAddLight, ...other } = props;

  const handleClose = () => {
    setView(0);
    onClose();
  };

  const handleAddLight = lightId => {
    onAddLight(lightId);
    handleClose();
  };

  const handleSetManual = () => {
    setView(1);
  };

  const handleSetDiscover = () => {
    setView(0);
  };

  let DialogBody;
  if (view === 0) {
    DialogBody = (
      <DiscoveredLightsView
        onSetManual={handleSetManual}
        onAddLight={handleAddLight}
      />
    );
  } else if (view === 1) {
    DialogBody = (
      <ManualView onBack={handleSetDiscover} onAddLight={handleAddLight} />
    );
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      {...other}
    >
      <DialogTitle id="simple-dialog-title">Add a Light</DialogTitle>
      {DialogBody}
    </Dialog>
  );
};

AddLightDialog.propTypes = {
  onClose: PropTypes.func
};

export default AddLightDialog;
