import React from "react";
import PropTypes from "prop-types";
import "./style.css";

interface Props {
  style: any;
  documents: string;
}

export const Documents = ({ style, documents = "/img/documents-4.png" }: Props): JSX.Element => {
  return <img className="documents" style={style} alt={"Documents"} src={documents} />;
};

Documents.propTypes = {
  documents: PropTypes.string,
};
