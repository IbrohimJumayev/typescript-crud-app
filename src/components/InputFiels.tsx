interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void
}

const InputFiels = ({todo, setTodo, handleSubmit}: TodoProps) => {
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex gap-5 mt-10"> 
            <input value={todo} onChange={(e) => setTodo(e.target.value)} className="px-2 py-2 bg-transparent outline-none border text-white font-bold" type="text" placeholder="Enter a task..." />
            <button  className="shadow-xl active:shadow-sm bg-blue-400">add task</button>
        </form>
    </div>
  )
}

export default InputFiels