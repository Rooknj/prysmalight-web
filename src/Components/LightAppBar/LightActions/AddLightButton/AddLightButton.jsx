import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddLightDialog from "./AddLightDialog";

const emails = ["username@gmail.com", "user02@gmail.com"];

const AddLightButton = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <AddLightDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </React.Fragment>
  );
};

AddLightButton.propTypes = {
  onAddLight: PropTypes.func.isRequired
};

export default AddLightButton;
