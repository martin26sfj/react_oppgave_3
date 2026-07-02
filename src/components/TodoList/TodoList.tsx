import { useTodos } from "../../context/TodoContext";
import styles from "./TodoList.module.css";

function TodoList() {
  // Leser todos og funksjonene direkte fra context
  const { todos, toggleTodo, removeTodo } = useTodos();

  if (todos.length === 0) {
    return <p className={styles.tom}>Ingen oppgaver enda — legg til en!</p>;
  }

  return (
    <ul className={styles.liste}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <label className={styles.label}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.done ? styles.fullfort : ""}>
              {todo.text}
            </span>
          </label>
          <button
            className={styles.fjernKnapp}
            onClick={() => removeTodo(todo.id)}
            aria-label={`Fjern "${todo.text}"`}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;