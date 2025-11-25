"use client";

import React from "react";

export default function Loader({ fullscreen = true }) {
  if (fullscreen) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="spinner" />
      </div>
    );
  }

  return <div className="spinner" />;
}
