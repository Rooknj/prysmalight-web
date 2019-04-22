import React from "react";
import PropTypes from "prop-types";
import LightIcon from "mdi-material-ui/Lightbulb";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";

const LightAvatar = styled(Avatar)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary[100]};
  color: ${({ theme }) => theme.palette.primary[900]};
`;

const DiscoveredLightsList = ({
  lights,
  onListItemClick,
  onAddManual,
  addLightLoading
}) => (
  <List>
    <ListItem
      button
      onClick={onAddManual}
      key={"AddManual"}
      disabled={addLightLoading}
    >
      <ListItemAvatar>
        <Avatar>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={"Add Light Manually"} />
    </ListItem>
    {lights.map(light => (
      <ListItem
        button
        onClick={() => onListItemClick(light.id)}
        key={light.id}
        disabled={addLightLoading}
      >
        <ListItemAvatar>
          <LightAvatar>
            <LightIcon />
          </LightAvatar>
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
