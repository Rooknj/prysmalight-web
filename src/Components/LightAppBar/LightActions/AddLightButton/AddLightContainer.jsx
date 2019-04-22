import React from "react";
import AddLightButton from "./AddLightButton";
import { Mutation } from "react-apollo";
import {
  ADD_LIGHT,
  GET_LIGHTS,
  GET_DISCOVERED_LIGHTS
} from "common/graphqlConstants.js";

const addLightToCache = (cache, { data: { addLight } }) => {
  // If no data was returned, do nothing
  if (!addLight) return;

  // Remove the added light from GET_DISCOVERED_LIGHTS
  const { discoveredLights } = cache.readQuery({
    query: GET_DISCOVERED_LIGHTS
  });

  cache.writeQuery({
    query: GET_DISCOVERED_LIGHTS,
    data: {
      discoveredLights: discoveredLights.filter(
        light => light.id !== addLight.id
      )
    }
  });

  // Remove the added light from GET_LIGHTS
  const { lights } = cache.readQuery({
    query: GET_LIGHTS
  });

  // If the light already exists, do nothing
  if (lights.find(light => light.id === addLight.id)) return;

  // Write the light to the cache
  cache.writeQuery({
    query: GET_LIGHTS,
    data: { lights: lights.concat([addLight]) }
  });
};

const AddLightContainer = props => {
  const handleMutationError = error => {
    console.error(error);
  };

  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(0);

  const handleSetManualView = () => {
    setView(1);
  };

  const handleSetDiscoverView = () => {
    setView(0);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Mutation
      mutation={ADD_LIGHT}
      update={addLightToCache}
      onError={handleMutationError}
      onCompleted={handleClose}
    >
      {(addLight, { loading, error }) => (
        <AddLightButton
          addLightLoading={loading}
          addLightError={error}
          modalOpen={open}
          onOpenModal={handleOpen}
          onCloseModal={handleClose}
          view={view}
          onSetManualView={handleSetManualView}
          onSetDiscoverView={handleSetDiscoverView}
          onAddLight={(lightId, lightName = "") =>
            addLight({
              variables: {
                lightId,
                lightName
              }
            })
          }
        />
      )}
    </Mutation>
  );
};

AddLightContainer.propTypes = {};

export default AddLightContainer;
