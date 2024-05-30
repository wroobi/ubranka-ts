"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.css";

export default function Select() {
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    const val = Math.ceil(Math.random() * 4);
    setSelected(val);
  };
  return (
    <div className={styles.select}>
      <Image
        src={getImage(selected)}
        alt="zdjecie ubranka"
        width={300}
        height={300}
      />
      <button className={styles.button} onClick={handleClick}>
        Losuj
      </button>
    </div>
  );
}

const getImage = (number: number) => {
  switch (number) {
    case 1:
      return "/dres.jpg";

    case 2:
      return "/spodnica.jpg";

    case 3:
      return "/spodnie.png";

    default:
      return "/sukienka.jpg";
  }
};
