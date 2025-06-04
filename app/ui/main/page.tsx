"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Select from "../select";
import { Tabs, getCurrentSeason } from "../tabs";
import LogoutButton from "../logoutButton";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());
  return (
    <main className={styles.main}>
      <LogoutButton />
      <Tabs
        setSelectedSeason={setSelectedSeason}
        selectedSeason={selectedSeason}
      />
      <div className={styles.center}>
        <h1 className={styles.title}>Cześć {session?.user?.name}!</h1>
      </div>
      <Select selectedSeason={selectedSeason} />
    </main>
  );
}
