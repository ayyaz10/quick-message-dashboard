import React from "react";
import { createRoot } from "react-dom/client";
import ContentScript from "./contentScript";

function init() {
  const appsContainer = document.createElement("div");
  document.body.appendChild(appsContainer);
  if (!appsContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appsContainer);
  root.render(<ContentScript />);
}

window.onload = () => {
  init();
};
