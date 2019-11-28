import React from "react";
import PropTypes from "prop-types";

import { CustomButton, CustomLabel } from "./styles";

export default function Button({ label, onPress, style }) {
  return (
    <CustomButton label={label} onPress={onPress} style={style}>
      <CustomLabel>{label}</CustomLabel>
    </CustomButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string])
};

Button.defaultProps = {
  label: "",
  onPress: () => {},
  style: {}
};
