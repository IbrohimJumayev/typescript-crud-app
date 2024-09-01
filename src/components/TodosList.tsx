import { Todos } from "../model"
import SingleTodo from "./SingleTodo";

interface Props {
  todosList: Todos[];
  setTodosList: React.Dispatch<React.SetStateAction<Todos[]>>
}


const TodosList = ({todosList, setTodosList}: Props) => {
  return (
    <div>
      {todosList.map((todo) => (
       <SingleTodo todo={todo} key={todo.id} todosList={todosList} setTodosList={setTodosList}/>
      ))}
    </div>
  );
}

export default TodosList