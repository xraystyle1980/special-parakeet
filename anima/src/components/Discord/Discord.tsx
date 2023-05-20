import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  discord: string;
}

export const Discord = ({ style, discord = "/img/discord-4.png" }: Props): JSX.Element => {
  return <img className="discord" style={style} alt={"Discord"} src={discord} />;
};

Discord.propTypes = {
  discord: PropTypes.string,
};
