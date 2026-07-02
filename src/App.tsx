// ============================================================
//  Context-oppgave — TodoApp + ThemeSwitcher
//  Features: TodoContext, ThemeContext, useContext, TypeScript
// ============================================================

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";

// Egen komponent for selve innholdet, slik at den kan
// lese theme fra context (må være INNI ThemeProvider)
function AppInnhold() {
  const { theme } = useTheme();

  return (
    <main className={styles.app} data-theme={theme}>
      <header className={styles.header}>
        <h1 className={styles.tittel}>Context-oppgave</h1>
      </header>


      <section className={styles.todoSeksjon}>
      <ThemeSwitcher />
        <h2 className={styles.undertittel}>Mine oppgaver</h2>
        <AddTodo />
        <TodoList />
      </section>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <AppInnhold />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;