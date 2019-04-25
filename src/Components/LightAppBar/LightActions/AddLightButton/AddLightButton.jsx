import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import AddLightDialog from "./AddLightDialog";
import LightSnackbar from "common/components/LightSnackbar";

const AddLightButton = props => {
  const { modalOpen, onClick, onCloseModal, lightAdded, ...other } = props;

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={onClick}>
        <AddIcon />
      </IconButton>
      <AddLightDialog open={modalOpen} onClose={onCloseModal} {...other} />
      {lightAdded && <LightSnackbar message={`Added ${lightAdded}`} />}
    </React.Fragment>
  );
};

AddLightButton.propTypes = {
  onAddLight: PropTypes.func.isRequired
};

export default AddLightButton;
