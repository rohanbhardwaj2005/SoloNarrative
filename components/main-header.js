"use client";

import Link from "next/link";

import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Solo Narrative</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
