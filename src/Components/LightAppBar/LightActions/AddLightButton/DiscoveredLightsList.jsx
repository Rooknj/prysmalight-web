import React from "react";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

const DiscoveredLightsList = ({ lights, onListItemClick }) => (
  <List>
    {lights.map(light => (
      <ListItem button onClick={() => onListItemClick(light.id)} key={light.id}>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={light.id} />
      </ListItem>
    ))}
  </List>
);

DiscoveredLightsList.defaultProps = {
  lights: []
};

export default DiscoveredLightsList;
