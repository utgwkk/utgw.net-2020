import React from "react";
import Image from "next/image";

export const LargeIcon: React.VFC = () => (
  <div className="icon-container">
    <Image
      src="/img/nikutai.png"
      className="icon"
      width={500}
      height={500}
      alt="icon"
    />
  </div>
);
