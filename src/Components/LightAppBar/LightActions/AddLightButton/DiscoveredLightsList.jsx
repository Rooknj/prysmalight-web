import React from "react";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

const DiscoveredLightsList = ({ lights, onListItemClick }) => (
  <List>
    {lights.map(email => (
      <ListItem button onClick={() => onListItemClick(email)} key={email}>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={email} />
      </ListItem>
    ))}
    <ListItem button onClick={() => onListItemClick("addAccount")}>
      <ListItemAvatar>
        <Avatar>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="add account" />
    </ListItem>
  </List>
);

export default DiscoveredLightsList;
