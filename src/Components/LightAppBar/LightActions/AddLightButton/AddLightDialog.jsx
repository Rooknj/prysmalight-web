import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DiscoveredLightsView from "./DiscoveredLightsView";
import ManualView from "./ManualView";

const AddLightDialog = props => {
  const {
    view,
    onSetManualView,
    onSetDiscoverView,
    open,
    onClose,
    addLightLoading,
    ...other
  } = props;

  let DialogBody;
  if (view === 0) {
    DialogBody = (
      <DiscoveredLightsView
        onAddManual={onSetManualView}
        addLightLoading={addLightLoading}
        {...other}
      />
    );
  } else if (view === 1) {
    DialogBody = (
      <ManualView
        onBack={onSetDiscoverView}
        addLightLoading={addLightLoading}
        {...other}
      />
    );
  }

  return (
    <Dialog
      onClose={onClose}
      onExited={onSetDiscoverView}
      aria-labelledby="simple-dialog-title"
      open={open}
      disableBackdropClick={addLightLoading}
      disableEscapeKeyDown={addLightLoading}
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
