"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.css";
import { Season } from "./tabs";

export default function Select({ selectedSeason }: { selectedSeason: Season }) {
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    const val = Math.ceil(Math.random() * 4);
    setSelected(val);
  };

  return (
    <div className={styles.select}>
      <Image
        src={getImage(selected, selectedSeason)}
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

const getImage = (number: number, selectedSeason: Season) => {
  const images: Record<Season, Record<string, string>> = {
    Wiosna: {
      1: "/spodenki.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    Lato: {
      1: "/spodenki.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    Jesień: {
      1: "/dres.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    Zima: {
      1: "/dres.jpg",
      2: "/spodnica.jpg",
      3: "/spodnie.png",
      4: "/sukienka.jpg",
    },
  };

  return images[selectedSeason][number.toString()] || "/dres.jpg";
};
