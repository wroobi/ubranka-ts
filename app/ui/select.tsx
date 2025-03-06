"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.css";
import { Season } from "./tabs";
import ImageSkeleton from "./skeleton";

export default function Select({ selectedSeason }: { selectedSeason: Season }) {
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    let val;

    do {
      val = Math.ceil(Math.random() * 4);
    } while (val === selected);
    setSelected(val);
    setLoading(false);
  };

  return (
    <div className={styles.select}>
      <div className={styles.imageContainer}>
        <div
          className={`${styles.skeletonWrapper} ${
            !loading ? styles.hidden : ""
          }`}
        >
          <ImageSkeleton />
        </div>
        <Image
          src={getImage(selected, selectedSeason)}
          alt="zdjecie ubranka"
          width={300}
          height={300}
          className={`${styles.image} ${loading ? styles.hidden : ""}`}
        />
      </div>
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Losowanie..." : "Losuj"}
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
