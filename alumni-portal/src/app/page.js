import Sidebar from "./components/sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <Sidebar></Sidebar>
      <div className="col-span-4">
        TIGERS
      </div>
    </div>
  );
}
