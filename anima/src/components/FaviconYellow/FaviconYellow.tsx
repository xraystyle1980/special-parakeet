import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  faviconYellow: string;
}

export const FaviconYellow = ({ style, faviconYellow = "/img/favicon-yellow-4.png" }: Props): JSX.Element => {
  return <img className="favicon-yellow" style={style} alt={"Favicon yellow"} src={faviconYellow} />;
};

FaviconYellow.propTypes = {
  faviconYellow: PropTypes.string,
};
