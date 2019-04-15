import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import DiscoveredLightsList from "./DiscoveredLightsList";
import { GET_DISCOVERED_LIGHTS } from "common/graphqlConstants";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const SearchingContainer = styled.div``;

const DiscoveredLightsView = props => {
  const { onAddLight, onSetManual } = props;

  return (
    <React.Fragment>
      <div>
        <Query
          query={GET_DISCOVERED_LIGHTS}
          fetchPolicy="cache-and-netword"
          pollInterval={3000}
        >
          {({ data }) => {
            return (
              <DiscoveredLightsList
                lights={data ? data.discoveredLights : []}
                onListItemClick={onAddLight}
              />
            );
          }}
        </Query>
      </div>
      <SearchingContainer>
        <Typography variant="body1">Searching</Typography>
        <CircularProgress size={20} />
      </SearchingContainer>
      <Link component="button" variant="body2" onClick={onSetManual}>
        Not Seeing Your Light?
      </Link>
    </React.Fragment>
  );
};

DiscoveredLightsView.propTypes = {
  onClose: PropTypes.func
};

export default DiscoveredLightsView;
