import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import AddLightButton from "./AddLightButton";
import DeleteIcon from "@material-ui/icons/Delete";

const LightActions = ({ onAddLight, onRemoveLight }) => (
  <React.Fragment>
    <AddLightButton onAddLight={onAddLight} />
    <IconButton color="inherit" onClick={onRemoveLight}>
      <DeleteIcon />
    </IconButton>
    {/* <IconButton color="inherit" onClick={() => console.log("HAHAHA EDIT")}>
      <EditIcon />
    </IconButton> */}
  </React.Fragment>
);

LightActions.propTypes = {
  onAddLight: PropTypes.func.isRequired,
  onRemoveLight: PropTypes.func.isRequired
};

export default LightActions;
