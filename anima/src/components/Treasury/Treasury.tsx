import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  subtract: string;
  vector: string;
}

export const Treasury = ({
  style,
  subtract = "/img/subtract-4.png",
  vector = "/img/vector-4.png",
}: Props): JSX.Element => {
  return (
    <div className="treasury" style={style}>
      <div className="overlap-group">
        <img className="subtract" alt={"Subtract"} src={subtract} />
        <img className="vector" alt={"Vector"} src={vector} />
      </div>
    </div>
  );
};

Treasury.propTypes = {
  subtract: PropTypes.string,
  vector: PropTypes.string,
};
