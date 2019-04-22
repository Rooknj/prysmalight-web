import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddLightDialog from "./AddLightDialog";

const AddLightButton = props => {
  const { modalOpen, onOpenModal, onCloseModal, ...other } = props;

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={onOpenModal}>
        <AddIcon />
      </IconButton>
      <AddLightDialog open={modalOpen} onClose={onCloseModal} {...other} />
    </React.Fragment>
  );
};

AddLightButton.propTypes = {
  onAddLight: PropTypes.func.isRequired
};

export default AddLightButton;
