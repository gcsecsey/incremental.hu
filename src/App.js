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
        <h2 style={{ display: "inline-block" }}>hello@incremental.hu</h2>
      </a>

      <div>
        <a href="https://www.facebook.com/incremental.hu/">
          <SVGIcon style={{ padding: ".5em" }} name="facebook" />
        </a>
        <a href="https://github.com/Incremental-Consulting">
          <SVGIcon style={{ padding: ".5em" }} name="github" />
        </a>
        <a href="https://www.linkedin.com/company/incremental-consulting">
          <SVGIcon style={{ padding: ".5em" }} name="linkedin" />
        </a>
      </div>
    </div>
  );
}
