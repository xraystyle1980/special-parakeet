import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  question: string;
}

export const Question = ({ style, question = "/img/question-3.png" }: Props): JSX.Element => {
  return <img className="question" style={style} alt={"Question"} src={question} />;
};

Question.propTypes = {
  question: PropTypes.string,
};
