import React from "react";
import PropTypes from "prop-types";
import LightControls from "./LightControls";
import LightHeader from "./DialogHeader";
import ZoomDialog from "common/components/ZoomDialog";
import OptionsDrawer from "./OptionsDrawer";

const propTypes = {
  light: PropTypes.shape({
    id: PropTypes.string.isRequired,
    connected: PropTypes.number,
    state: PropTypes.string,
    brightness: PropTypes.number,
    color: PropTypes.shape({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired
    }),
    effect: PropTypes.string,
    speed: PropTypes.number,
    supportedEffects: PropTypes.array
  }),
  loading: PropTypes.bool,
  onStateChange: PropTypes.func.isRequired,
  onBrightnessChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onEffectChange: PropTypes.func.isRequired,
  onSpeedChange: PropTypes.func.isRequired
};

const defaultProps = {
  light: {
    id: "",
    connected: 0,
    state: "OFF",
    brightness: 0,
    color: {
      r: 0,
      g: 0,
      b: 0
    }
  }
};

const LightDialog = props => {
  const {
    onClose,
    open,
    light,
    onStateChange,
    onBrightnessChange,
    containerRef
  } = props;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <ZoomDialog
      fullScreen
      open={open}
      onClose={onClose}
      containerRef={containerRef}
    >
      <LightHeader
        light={light}
        onClose={onClose}
        onStateChange={onStateChange}
        onBrightnessChange={onBrightnessChange}
        onMore={handleOpenDrawer}
      />
      <LightControls {...props} />
      <OptionsDrawer
        open={drawerOpen}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        light={light}
      />
    </ZoomDialog>
  );
};

LightDialog.propTypes = propTypes;
LightDialog.defaultProps = defaultProps;

export default LightDialog;
