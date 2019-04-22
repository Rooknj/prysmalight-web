import React from "react";

import { Mutation } from "react-apollo";
import { SET_LIGHT } from "common/graphqlConstants.js";
import LightStateContainer from "./LightStateContainer";
import LightSnackbar from "common/components/LightSnackbar";

class LightMutationContainer extends React.Component {
  render() {
    // The mutation will automatically update the cache
    return (
      <Mutation mutation={SET_LIGHT}>
        {(mutate, { data, loading, error }) => {
          return (
            <React.Fragment>
              <LightStateContainer
                {...this.props}
                setLight={mutate}
                lightData={data}
                loading={loading}
                error={error}
              />
              {error && (
                <LightSnackbar
                  message={`Error changing ${this.props.light.id}`}
                  type="error"
                />
              )}
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default LightMutationContainer;
