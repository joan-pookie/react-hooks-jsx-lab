import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return(
  <div id="home">
    <h1 style={{ color: "firebrick" }}>Welcome to {name}'s Home Page</h1>
    <p>{name} is a software developer living in {city}.</p>
  </div>
  );
}

export default Home;
