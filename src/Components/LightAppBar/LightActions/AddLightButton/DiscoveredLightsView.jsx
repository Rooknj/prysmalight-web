import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import DiscoveredLightsList from "./DiscoveredLightsList";
import { GET_DISCOVERED_LIGHTS } from "common/graphqlConstants";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const SearchingContainer = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const PaddedTypography = styled(Typography)`
  padding-left: 24px;
  padding-right: 24px;
`;

const DiscoveredLightsView = props => {
  const { onAddLight, addLightError, ...other } = props;

  return (
    <React.Fragment>
      <div>
        {addLightError && (
          <PaddedTypography variant="body2" color="error">
            *Error adding Light
          </PaddedTypography>
        )}
        <SearchingContainer>
          <Typography variant="body2" color="textSecondary">
            Searching...
          </Typography>
          <ProgressContainer>
            <CircularProgress size={15} />
          </ProgressContainer>
        </SearchingContainer>
        <Query
          query={GET_DISCOVERED_LIGHTS}
          fetchPolicy="cache-and-network"
          pollInterval={3000}
        >
          {({ data }) => (
            <DiscoveredLightsList
              lights={data ? data.discoveredLights : []}
              onListItemClick={onAddLight}
              {...other}
            />
          )}
        </Query>
      </div>
    </React.Fragment>
  );
};

DiscoveredLightsView.propTypes = {
  onClose: PropTypes.func
};

export default DiscoveredLightsView;
