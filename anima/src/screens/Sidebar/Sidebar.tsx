import React from "react";
import { SideNav } from "../../components/SideNav";
import { FaviconYellow } from "../../components/FaviconYellow";
import "./style.css";

export const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebar">
      <div className="div">
        <FaviconYellow
          faviconYellow="/img/favicon-yellow-2.png"
          style={{
            height: "53px",
            left: "8px",
            top: "8px",
            width: "53px",
          }}
        />
        <div className="utility-nav">
          <img className="divider" alt={"Divider"} src={"/img/divider-2.png"} />
          <SideNav icon="Icon Documentation" stateProp="Default" />
          <SideNav icon="Icon Discord" stateProp="Default" />
          <img className="img" alt={"Divider"} src={"/img/divider-2.png"} />
          <SideNav icon="Icon Language" stateProp="Default" />
        </div>
        <div className="buttons">
          <SideNav icon="Icon Home" stateProp="Default" />
          <SideNav icon="Icon Nodes" stateProp="Default" />
          <SideNav icon="Icon Proposals" stateProp="Default" />
          <SideNav icon="Icon Treasury" stateProp="Default" />
          <SideNav icon="Icon Integrations" stateProp="Default" />
        </div>
      </div>
    </div>
  );
};
