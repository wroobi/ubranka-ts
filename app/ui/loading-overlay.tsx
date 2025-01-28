import styles from "./loading-overlay.module.css";

export default function LoadingOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}
