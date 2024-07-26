"use client";

import { GrPowerReset } from "react-icons/gr";
import Link from "next/link";

const GoBack = () => {
  return (
    <header id="main-header" style={{ marginLeft: "2px" }}>
      <nav>
        <ul>
          <li>
            <Link
              href="/archive"
              style={{
                fontFamily: "Josefin Sans",
                display: "flex",
                alignItems: "center",
                alignContent: "left",
                marginLeft: "-20px",
              }}
            >
              <GrPowerReset style={{ marginRight: "8px" }} />
              <span style={{ tabSize: "10px" }}>Reset Filter</span>
            </Link>
          </li>
        </ul>
        <br />
        <br />
      </nav>
    </header>
  );
};

export default GoBack;
