import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddLightDialog from "./AddLightDialog";

const AddLightButton = props => {
  const { onAddLight, ...other } = props;

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <AddLightDialog
        open={open}
        onClose={handleClose}
        onAddLight={onAddLight}
      />
    </React.Fragment>
  );
};

AddLightButton.propTypes = {
  onAddLight: PropTypes.func.isRequired
};

export default AddLightButton;
