import React from "react";
import "./popup.css";
function Popup() {
  function handleInput() {
    // chrome.storage.
  }
  return (
    <div>
      <main>
        <header>
          <ul>
            <li>
              <img src="/focuslist-logo.png" width="40" height="40" alt="" />
            </li>
            <li>handylist</li>
          </ul>
        </header>
        <section>
          <form action="">
            <input type="checkbox" id="handyPopupCheckbox" />
            <label htmlFor="handyPopupCheckbox">Enable HandyList Popup</label>
          </form>
        </section>
      </main>
    </div>
  );
}
export default Popup;
