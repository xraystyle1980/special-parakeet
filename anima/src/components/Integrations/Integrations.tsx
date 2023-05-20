import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  integrations: string;
}

export const Integrations = ({ style, integrations = "/img/integrations-4.png" }: Props): JSX.Element => {
  return <img className="integrations" style={style} alt={"Integrations"} src={integrations} />;
};

Integrations.propTypes = {
  integrations: PropTypes.string,
};
