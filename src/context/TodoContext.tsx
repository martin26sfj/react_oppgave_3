import { createContext, useContext, useState, type ReactNode } from "react";

// Typen for én enkelt todo
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Typen for det Context skal tilby til komponentene
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

// Oppretter Context — starter som undefined til Provider settes opp
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const nyTodo: Todo = { id: Date.now(), text, done: false };
    setTodos([...todos, nyTodo]);
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Egen hook for å konsumere context — gir en tydelig feilmelding
// dersom noen prøver å bruke den utenfor TodoProvider
export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodos må brukes innenfor en TodoProvider");
  }
  return context;
}