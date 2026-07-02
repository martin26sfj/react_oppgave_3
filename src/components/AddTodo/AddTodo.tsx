import { useState, type ChangeEvent } from "react";
import { useTodos } from "../../context/TodoContext";
import styles from "./AddTodo.module.css";

function AddTodo() {
  // Lokal state for input-feltet
  const [tekst, setTekst] = useState<string>("");

  // addTodo hentes fra context — ingen props sendes inn
  const { addTodo } = useTodos();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTekst(e.target.value);
  }

  function handleLeggTil() {
    if (!tekst.trim()) return;
    addTodo(tekst);
    setTekst("");
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Ny oppgave..."
        value={tekst}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleLeggTil()}
      />
      <button className={styles.knapp} onClick={handleLeggTil}>
        Legg til
      </button>
    </div>
  );
}

export default AddTodo;