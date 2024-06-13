"use client";
import React from "react";
import styles from "./tabs.module.css";

export type Season = "Zima" | "Lato";

export const getCurrentSeason = (): Season => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so we add 1 to get the actual month number

  let initialSeason: Season = "Zima";
  if (currentMonth >= 4 && currentMonth <= 9) {
    initialSeason = "Lato";
  }

  return initialSeason;
};

export const Tabs = ({
  selectedSeason,
  setSelectedSeason,
}: {
  selectedSeason: Season;
  setSelectedSeason: React.Dispatch<React.SetStateAction<Season>>;
}) => {
  const handleSeasonChange = (selectedSeason: Season) => {
    setSelectedSeason(selectedSeason);
  };

  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${
          selectedSeason === "Zima" ? styles.active : ""
        }`}
        onClick={() => handleSeasonChange("Zima")}
      >
        Zima
      </button>
      <button
        className={`${styles.tab} ${
          selectedSeason === "Lato" ? styles.active : ""
        }`}
        onClick={() => handleSeasonChange("Lato")}
      >
        Lato
      </button>
    </div>
  );
};
