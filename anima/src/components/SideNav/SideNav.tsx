import React from "react";
import { useReducer } from "react";
import PropTypes from "prop-types";
import { Proposals } from "../Proposals";
import { Discord } from "../Discord";
import { Question } from "../Question";
import { Globe } from "../Globe";
import { Treasury } from "../Treasury";
import { Home } from "../Home";
import { Integrations } from "../Integrations";
import { Documents } from "../Documents";
import { Tree } from "../Tree";
import "./style.css";

interface Props {
  icon:
    | "Icon Discord"
    | "Icon Language"
    | "Icon Documentation"
    | "Icon Nodes"
    | "Icon Home"
    | "Icon Help"
    | "Icon Proposals"
    | "Icon Integrations"
    | "Icon Treasury";
  stateProp: "Default" | "Hover";
  documentsDocuments: string;
  discordDiscord: string;
  globeGlobe: string;
  homeHome: string;
  treeTree: string;
  proposalsProposals: string;
  treasurySubtract: string;
  treasuryVector: string;
  integrationsIntegrations: string;
}

export const SideNav = ({
  icon,
  stateProp,
  documentsDocuments = "/img/documents-4.png",
  discordDiscord = "/img/discord-4.png",
  globeGlobe = "/img/globe-4.png",
  homeHome = "/img/home-4.png",
  treeTree = "/img/tree-4.png",
  proposalsProposals = "/img/proposals-4.png",
  treasurySubtract = "/img/subtract-4.png",
  treasuryVector = "/img/vector-4.png",
  integrationsIntegrations = "/img/integrations-4.png",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    icon: icon || "Icon Home",
    state: stateProp || "Default",
  });

  return (
    <div
      className="side-nav"
      style={{
        backgroundColor: state.state === "Hover" ? "#000000" : undefined,
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <>
        {state.icon === "Icon Home" && (
          <>
            <Home
              home={homeHome}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Nodes" && (
          <>
            <Tree
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
              tree={treeTree}
            />
          </>
        )}

        {state.icon === "Icon Proposals" && (
          <>
            <Proposals
              proposals={proposalsProposals}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Treasury" && (
          <>
            <Treasury
              style={{
                minWidth: "24px",
                position: "relative",
                width: "unset",
              }}
              subtract={treasurySubtract}
              vector={treasuryVector}
            />
          </>
        )}

        {state.icon === "Icon Integrations" && (
          <>
            <Integrations
              integrations={integrationsIntegrations}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Help" && (
          <>
            <Question
              question={state.state === "Hover" ? "/img/question-4.png" : "/img/question-3.png"}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Discord" && (
          <>
            <Discord
              discord={discordDiscord}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Documentation" && (
          <>
            <Documents
              documents={documentsDocuments}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}

        {state.icon === "Icon Language" && (
          <>
            <Globe
              globe={globeGlobe}
              style={{
                left: "unset",
                minWidth: "24px",
                position: "relative",
                top: "unset",
                width: "unset",
              }}
            />
          </>
        )}
      </>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "Hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "Default",
      };
  }

  return state;
}

SideNav.propTypes = {
  icon: PropTypes.oneOf([
    "Icon Discord",
    "Icon Language",
    "Icon Documentation",
    "Icon Nodes",
    "Icon Home",
    "Icon Help",
    "Icon Proposals",
    "Icon Integrations",
    "Icon Treasury",
  ]),
  stateProp: PropTypes.oneOf(["Default", "Hover"]),
  documentsDocuments: PropTypes.string,
  discordDiscord: PropTypes.string,
  globeGlobe: PropTypes.string,
  homeHome: PropTypes.string,
  treeTree: PropTypes.string,
  proposalsProposals: PropTypes.string,
  treasurySubtract: PropTypes.string,
  treasuryVector: PropTypes.string,
  integrationsIntegrations: PropTypes.string,
};
