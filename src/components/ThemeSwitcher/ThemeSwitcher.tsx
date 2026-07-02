import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  // Henter theme og toggleTheme direkte fra context — ingen props
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={styles.seksjon}>
      <p className={styles.tekst}>Gjeldende tema: {theme}</p>
      <button className={styles.knapp} onClick={toggleTheme}>
        Bytt tema
      </button>
    </section>
  );
}

export default ThemeSwitcher;