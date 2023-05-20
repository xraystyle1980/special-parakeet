import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  proposals: string;
}

export const Proposals = ({ style, proposals = "/img/proposals-4.png" }: Props): JSX.Element => {
  return <img className="proposals" style={style} alt={"Proposals"} src={proposals} />;
};

Proposals.propTypes = {
  proposals: PropTypes.string,
};
