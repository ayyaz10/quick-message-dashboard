import React from "react";

function ContentScript() {
  window.onload = (event) => {
    console.log("page is fully loaded");
  };
  console.log("Quick message dashboard");
  return (
    <div>
      <h1>helo content script</h1>
    </div>
  );
}
export default ContentScript;
