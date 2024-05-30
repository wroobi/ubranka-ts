import Select from "./Select";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>Cześć Tosia!</h1>
      </div>

      <Select />
    </main>
  );
}
