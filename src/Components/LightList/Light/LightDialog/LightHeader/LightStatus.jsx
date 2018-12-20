import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import HightlightIcon from "@material-ui/icons/Highlight";
import grey from "@material-ui/core/colors/grey";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  backgroundcolor: ${grey[400]};
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
  })
};

const defaultProps = {
  color: {
    r: 0,
    g: 0,
    b: 0
  }
};

const LightStatus = props => {
  return (
    <CardHeader
      title={props.id}
      subheader={props.connected === 2 ? "Connected" : "Disonnected"}
      avatar={
        <StyledAvatar aria-label="Light">
          <HightlightIcon
            nativeColor={`rgb(${props.color.r},${props.color.g},${
              props.color.b
            })`}
          />
        </StyledAvatar>
      }
    />
  );
};

LightStatus.propTypes = propTypes;
LightStatus.defaultProps = defaultProps;

export default LightStatus;
