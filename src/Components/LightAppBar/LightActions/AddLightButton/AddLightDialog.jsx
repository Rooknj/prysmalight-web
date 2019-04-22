import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DiscoveredLightsView from "./DiscoveredLightsView";
import ManualView from "./ManualView";

const AddLightDialog = props => {
  const [view, setView] = React.useState(0);

  const { open, onClose, ...other } = props;

  const handleClose = () => {
    onClose();
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
      <DiscoveredLightsView onAddManual={handleSetManual} {...other} />
    );
  } else if (view === 1) {
    DialogBody = <ManualView onBack={handleSetDiscover} {...other} />;
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
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
