import React, { ReactElement } from "react";

const Scroll = (props: { children: ReactElement }) => {
  return <div style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}>{props.children}</div>;
};

export default Scroll;
