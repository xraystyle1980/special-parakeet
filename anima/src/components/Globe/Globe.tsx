import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  globe: string;
}

export const Globe = ({ style, globe = "/img/globe-4.png" }: Props): JSX.Element => {
  return <img className="globe" style={style} alt={"Globe"} src={globe} />;
};

Globe.propTypes = {
  globe: PropTypes.string,
};
