import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DiscoveredLightsList from "./DiscoveredLightsList";
import { GET_DISCOVERED_LIGHTS } from "common/graphqlConstants";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddLightDialog = props => {
  const { onClose, onAddLight, ...other } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = value => {
    console.log(value);
    onAddLight(value);
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      {...other}
    >
      <DialogTitle id="simple-dialog-title">Add a Light</DialogTitle>
      <div>searching</div>
      <CircularProgress />
      <div>
        <Query
          query={GET_DISCOVERED_LIGHTS}
          fetchPolicy="network-only"
          pollInterval={3000}
        >
          {({ loading, error, data }) => {
            return (
              <DiscoveredLightsList
                lights={data ? data.discoveredLights : []}
                onListItemClick={handleListItemClick}
              />
            );
          }}
        </Query>
        <div>Not Seeing Your Light?</div>
      </div>
    </Dialog>
  );
};

AddLightDialog.propTypes = {
  onClose: PropTypes.func
};

export default AddLightDialog;
