import Navlink from "@/provider/Navlink";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <h2>logo</h2>

        <ul className="flex items-center gap-5">
          <li>
            <Navlink to="/">Home</Navlink>
          </li>
          <li>
            <Navlink to="/about">About Me</Navlink>
          </li>
          <li>
            <Navlink to="/portfolio">Portfolio</Navlink>
          </li>
          <li>
            <Navlink to="/blog">Blog</Navlink>
          </li>
        </ul>

        <button>Contact me</button>
      </div>
    </nav>
  );
}
