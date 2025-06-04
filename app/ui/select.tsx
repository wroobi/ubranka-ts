"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./select.module.css";
import { Season } from "./tabs";
import ImageSkeleton from "./skeleton";
import { Button } from "@/app/components/button";

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
      <Button
        onClick={handleClick}
        disabled={loading}
        variant="outline"
        size="lg"
      >
        {loading ? "Losowanie..." : "Losuj"}
      </Button>
    </div>
  );
}

const getImage = (number: number, selectedSeason: Season) => {
  const images: Record<Season, Record<string, string>> = {
    wiosna: {
      1: "/spodenki.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    lato: {
      1: "/spodenki.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    jesień: {
      1: "/dres.jpg",
      2: "/spodnica.jpg",
      3: "/sukienka.jpg",
      4: "/legginsy.jpg",
    },
    zima: {
      1: "/dres.jpg",
      2: "/spodnica.jpg",
      3: "/spodnie.png",
      4: "/sukienka.jpg",
    },
  };

  return images[selectedSeason][number.toString()] || "/dres.jpg";
};
