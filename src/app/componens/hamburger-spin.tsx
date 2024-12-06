"use client"

import { useState } from "react";

const Hamburger = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`tham tham-e-squeeze tham-w-6`}>
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}

export default Hamburger