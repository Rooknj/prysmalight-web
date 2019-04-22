import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RenameIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";

const OptionsDrawer = props => {
  const { onClose, onRename, onRemove, light, ...other } = props;

  return (
    <SwipeableDrawer anchor="bottom" onClose={onClose} {...other}>
      <List>
        <ListItem button onClick={onRename}>
          <ListItemIcon>
            <RenameIcon />
          </ListItemIcon>
          <ListItemText primary={`Rename ${light.name}`} />
        </ListItem>
        <ListItem button onClick={onRemove}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary={`Remove ${light.name}`} />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
          <ListItemText primary={"Cancel"} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default OptionsDrawer;
