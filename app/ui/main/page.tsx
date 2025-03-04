"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Select from "../select";
import { Tabs, getCurrentSeason } from "../tabs";
import { signOut } from "next-auth/react"; // Dodaj import

export default function Page() {
  // Check if user is already logged in

  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());
  return (
    <main className={styles.main}>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className={styles.logoutButton}
      >
        Wyloguj się
      </button>
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
