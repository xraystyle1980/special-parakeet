import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  home: string;
}

export const Home = ({ style, home = "/img/home-4.png" }: Props): JSX.Element => {
  return <img className="home" style={style} alt={"Home"} src={home} />;
};

Home.propTypes = {
  home: PropTypes.string,
};
