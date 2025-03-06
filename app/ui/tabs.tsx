"use client";
import React from "react";
import styles from "./tabs.module.css";

export type Season = "Zima" | "Lato" | "Wiosna" | "Jesień";

export const getCurrentSeason = (): Season => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  if (currentMonth >= 3 && currentMonth <= 5) return "Wiosna";
  if (currentMonth >= 6 && currentMonth <= 8) return "Lato";
  if (currentMonth >= 9 && currentMonth <= 11) return "Jesień";
  return "Zima";
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
      {["Zima", "Wiosna", "Lato", "Jesień"].map((season) => (
        <button
          key={season}
          className={`${styles.tab} ${
            selectedSeason === season ? styles.active : ""
          }`}
          onClick={() => handleSeasonChange(season as Season)}
        >
          {season}
        </button>
      ))}
    </div>
  );
};
