import React from "react";
import { Discord } from "../../components/Discord";
import { SideNav } from "../../components/SideNav";
import { Question } from "../../components/Question";
import { FaviconYellow } from "../../components/FaviconYellow";
import { Documents } from "../../components/Documents";
import "./style.css";

export const FractalHomeUserConnected = (): JSX.Element => {
  return (
    <div className="fractal-home-user-connected">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="radial-BG-glow" />
          <div className="body">
            <img className="logotype" alt={"Logotype"} src={"/img/logotype.png"} />
            <div className="title-and-CTA">
              <p className="text-wrapper">Find a Fractal above or create a new one</p>
              <div className="buttons">
                <div className="button">Create a Fractal</div>
              </div>
            </div>
            <div className="links">
              <article className="text-link-buttons">
                <Question
                  question="/img/question-1.svg"
                  style={{
                    left: "unset",
                    minWidth: "24px",
                    position: "relative",
                    top: "unset",
                    width: "unset",
                  }}
                />
                <div className="div">FAQ</div>
              </article>
              <article className="text-link-buttons">
                <Discord
                  discord="/img/discord-2.svg"
                  style={{
                    left: "unset",
                    minWidth: "24px",
                    position: "relative",
                    top: "unset",
                    width: "unset",
                  }}
                />
                <div className="div">Discord</div>
              </article>
              <article className="text-link-buttons">
                <Documents
                  documents="/img/documents.svg"
                  style={{
                    left: "unset",
                    minWidth: "24px",
                    position: "relative",
                    top: "unset",
                    width: "unset",
                  }}
                />
                <div className="div">Docs</div>
              </article>
            </div>
          </div>
          <div className="fractal-home-user-connected-sidebar">
            <FaviconYellow
              faviconYellow="/img/favicon-yellow.svg"
              style={{
                height: "36px",
                left: "16px",
                top: "16px",
                width: "36px",
              }}
            />
            <div className="utility-nav">
              <img className="divider" alt={"Divider"} src={"/img/divider.svg"} />
              <SideNav documentsDocuments="/img/documents-1.svg" icon="Icon Documentation" stateProp="Default" />
              <SideNav discordDiscord="/img/discord-3.svg" icon="Icon Discord" stateProp="Default" />
              <img className="divider" alt={"Divider"} src={"/img/divider.svg"} />
              <SideNav globeGlobe="/img/globe-1.svg" icon="Icon Language" stateProp="Default" />
            </div>
            <div className="buttons-2">
              <SideNav homeHome="/img/home-1.svg" icon="Icon Home" stateProp="Default" />
              <SideNav icon="Icon Nodes" stateProp="Default" treeTree="/img/tree.svg" />
              <SideNav icon="Icon Proposals" proposalsProposals="/img/proposals.svg" stateProp="Default" />
              <SideNav
                icon="Icon Treasury"
                stateProp="Default"
                treasurySubtract="/img/subtract-1.svg"
                treasuryVector="/img/vector.svg"
              />
              <SideNav
                icon="Icon Integrations"
                integrationsIntegrations="/img/integrations-1.svg"
                stateProp="Default"
              />
            </div>
          </div>
          <div className="top-nav">
            <div className="search-navigation">
              <div className="text-field-md">
                <div className="text-field-elements-md">
                  <div className="icons-and-text">
                    <div className="icon-prefix-and-text">
                      <div className="placeholder">
                        <img className="icon-search" alt={"Icon search"} src={"/img/search-1.svg"} />
                      </div>
                      <p className="p">Find a Fractal by address or ENS</p>
                    </div>
                    <div className="suffix-and-icon">
                      <div className="suffix" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="favorites-wallet">
              <div className="text-link-buttons">
                <div className="arrow-down-medium">
                  <img className="union" alt={"Union"} src={"/img/union.svg"} />
                </div>
                <div className="button-2">Favorites</div>
                <img className="arrow-down-medium" alt={"Arrow down medium"} src={"/img/arrow-down-medium-2.svg"} />
              </div>
              <div className="wallet-dropdown-button">
                <div className="jazzy-avatar">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                </div>
                <div className="address-and-arrow">
                  <div className="text-wrapper-2">0x123...2540</div>
                  <img className="img" alt={"Arrow down medium"} src={"/img/arrow-down-medium-1.svg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
