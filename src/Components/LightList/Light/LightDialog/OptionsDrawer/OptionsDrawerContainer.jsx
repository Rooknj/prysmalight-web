import React from "react";
import OptionsDrawer from "./OptionsDrawer";
import { Mutation } from "react-apollo";
import { GET_LIGHTS, REMOVE_LIGHT } from "common/graphqlConstants.js";

const removeLightFromCache = (cache, { data: { removeLight } }) => {
  // If no data was returned, do nothing
  if (!removeLight) return;
  const { lights } = cache.readQuery({
    query: GET_LIGHTS
  });

  // Find the index of the light to be removed
  var index = lights.indexOf(lights.find(light => light.id === removeLight.id));

  // Remove the light
  if (index > -1) {
    lights.splice(index, 1);
  }
  cache.writeQuery({
    query: GET_LIGHTS,
    data: { lights }
  });
};

const OptionsDrawerContainer = props => {
  const { light, onRenameSelected, ...other } = props;

  const handleRemoveComplete = data => {
    // TODO: Figure out how to show a snackbar
    //console.log(data);
  };

  const handleRemoveError = error => {
    // TODO: Figure out what to do on error
    console.log(error);
  };

  return (
    <Mutation
      mutation={REMOVE_LIGHT}
      update={removeLightFromCache}
      onCompleted={handleRemoveComplete}
      onError={handleRemoveError}
    >
      {(removeLight, remove) => (
        <OptionsDrawer
          onRename={onRenameSelected}
          removeLightLoading={remove.loading}
          light={light}
          onRemove={() => {
            removeLight({
              variables: {
                lightId: light.id
              }
            });
          }}
          {...other}
        />
      )}
    </Mutation>
  );
};

export default OptionsDrawerContainer;
