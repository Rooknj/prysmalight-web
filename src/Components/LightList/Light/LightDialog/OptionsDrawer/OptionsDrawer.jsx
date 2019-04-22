import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UpdateIcon from "@material-ui/icons/Update";
import RebootIcon from "@material-ui/icons/PowerSettingsNew";

const OptionsDrawer = props => {
  const { ...other } = props;
  return (
    <SwipeableDrawer anchor="bottom" {...other}>
      <List>
        <ListItem button onClick={() => console.log(1)}>
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello"} />
        </ListItem>
        <ListItem button onClick={() => console.log(2)}>
          <ListItemIcon>
            <RebootIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello 2"} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default OptionsDrawer;
