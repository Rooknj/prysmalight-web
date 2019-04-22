import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
//import PropTypes from "prop-types";

function Transition(props) {
  return <Zoom {...props} />;
}

const ZoomDialog = props => {
  const { containerRef, children, ...other } = props;

  // Set the origin of the transform animation to the center of the element calling the transform
  let transformOrigin = "50% 50% 0";
  if (containerRef) {
    const { x, y, width, height } = containerRef.getBoundingClientRect();

    // Set origin to the center of the rectangle
    transformOrigin = `${x + width / 2}px ${y + height / 2}px 0`;
  }

  const TransitionProps = { style: { transformOrigin } };
  return (
    <Dialog
      TransitionComponent={Transition}
      TransitionProps={TransitionProps}
      {...other}
    >
      {children}
    </Dialog>
  );
};

export default ZoomDialog;
