import React from "react";
import { LinearProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearProgress
        color="secondary"
        style={{ margin: "10vh 0", width: "90%" }}
      />
      <span style={{ fontSize: "1.5rem", color: "#e85a4f" }}>Loading..</span>
    </div>
  );
};

export default Loading;
