"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Select from "./ui/select";
import { Tabs, getCurrentSeason } from "./ui/tabs";

export default function Page() {
  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());

  return (
    <main className={styles.main}>
      <Tabs
        setSelectedSeason={setSelectedSeason}
        selectedSeason={selectedSeason}
      />
      <div className={styles.center}>
        <h1 className={styles.title}>Cześć Tosia!</h1>
      </div>

      <Select selectedSeason={selectedSeason} />
    </main>
  );
}
