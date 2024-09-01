import { useState } from "react";
import InputFiels from "./components/InputFiels";
import { Todos } from "./model";
import { saveToLocalStorage } from "./utils";
import TodosList from "./components/TodosList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosList, setTodosList] = useState<Todos[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodosList([
        ...todosList,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      saveToLocalStorage('todo', todo)
      setTodo('')
    }
  };
  return (
    <div className="flex justify-center mt-10 flex-col items-center">
      <span className="font-bold text-3xl">Taskify</span>
      <InputFiels todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodosList todosList={todosList} setTodosList={setTodosList} />
    </div>
  );
};

export default App;
