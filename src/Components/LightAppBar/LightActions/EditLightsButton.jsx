import React from "react";
import ModeContext from "context/ModeContext";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExitIcon from "@material-ui/icons/Close";

const EditLightsButton = props => {
  const mode = React.useContext(ModeContext);

  return (
    <IconButton color="inherit" onClick={mode.toggleEdit}>
      {mode.edit ? <ExitIcon /> : <EditIcon />}
    </IconButton>
  );
};

export default EditLightsButton;
