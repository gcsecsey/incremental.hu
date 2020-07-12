import React from "react";
import "./styles.css";
import InrementalLogo from "./components/IncrementalLogo";
import SVGIcon from "./components/SVGIcon";

export default function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: `300px`, margin: `2em auto` }}>
        <InrementalLogo />
      </div>
      <h1>Incremental Consulting</h1>

      <a href="mailto:hello@incremental.hu">
        <SVGIcon name="message" style={{ marginRight: ".25em" }} />
        <h2 style={{ display: "inline-block" }}>hello@incremental.hu</h2>
      </a>

      <div>
        <SVGIcon name="facebook" />
        <SVGIcon name="linkedin" />
      </div>
    </div>
  );
}
