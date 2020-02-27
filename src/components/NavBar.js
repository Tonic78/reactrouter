import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover this website
      </NavLink>
      <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
        About this website
      </NavLink>
      <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>
        Homepage
      </NavLink>
    </div>
  );
}
