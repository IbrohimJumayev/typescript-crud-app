import { Todos } from "../model";

interface Props {
  todo: Todos;
  todosList: Todos[];
  setTodosList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodo = ({ todo, setTodosList, todosList }: Props) => {

  const handleDelete = (id: number | string) => {
    const filteredTodos = todosList.filter((t) => t.id !== id);
    setTodosList(filteredTodos);
  };

//   const handleDone = (id: number | string) => {
//       const doneTodos = todosList.filter((t) => t.id === id)
//   }

  return (
    <ul>
      <li className="flex justify-between gap-20 mt-3" key={todo.id}>
        <p className="text-xl font-bold">{todo.todo}</p>
        <div className="flex gap-3">
          <button className="shadow-xl bg-gray-500 px-2 py-1">edit</button>
          <button
            onClick={() => handleDelete(todo.id)}
            className="shadow-xl bg-gray-500 px-2 py-1"
          >
            delete
          </button>
          <button className="shadow-xl bg-gray-500 px-2 py-1">done</button>
        </div>
      </li>
    </ul>
  );
};

export default SingleTodo;
