import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  tree: string;
}

export const Tree = ({ style, tree = "/img/tree-4.png" }: Props): JSX.Element => {
  return <img className="tree" style={style} alt={"Tree"} src={tree} />;
};

Tree.propTypes = {
  tree: PropTypes.string,
};
