import React from "react";
import AddLightButton from "./AddLightButton";
import { Mutation } from "react-apollo";
import { ADD_LIGHT, GET_LIGHTS } from "common/graphqlConstants.js";

const addLightToCache = (cache, { data: { addLight } }) => {
  // If no data was returned, do nothing
  if (!addLight) return;
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

  return (
    <Mutation
      mutation={ADD_LIGHT}
      update={addLightToCache}
      onError={handleMutationError}
    >
      {(addLight, { data, loading, error }) => (
        <AddLightButton
          onAddLight={(lightId, lightName = "") => {
            console.log(lightId, lightName);
            addLight({
              variables: {
                lightId,
                lightName
              }
            });
          }}
        />
      )}
    </Mutation>
  );
};

AddLightContainer.propTypes = {};

export default AddLightContainer;
