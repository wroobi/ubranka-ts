"use client";
import React from "react";
import styles from "./tabs.module.css";
import { Button } from "@/app/components/button";

export type Season = "zima" | "wiosna" | "lato" | "jesień";

export const getCurrentSeason = (): Season => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  if (currentMonth >= 3 && currentMonth <= 5) return "wiosna";
  if (currentMonth >= 6 && currentMonth <= 8) return "lato";
  if (currentMonth >= 9 && currentMonth <= 11) return "jesień";
  return "zima";
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
      {["zima", "wiosna", "lato", "jesień"].map((season) => (
        <Button
          key={season}
          className={`${styles.tab} ${
            selectedSeason === season ? styles.active : ""
          }`}
          onClick={() => handleSeasonChange(season as Season)}
        >
          {season}
        </Button>
      ))}
    </div>
  );
};
