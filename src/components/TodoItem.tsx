import type { Todo } from "../types/todo";

// ito naman ay nagvvalidate ng data based on Todo na model
// interface ay blueprint sa TypeScript na nag seset ng Rules
interface TodoItemProps {
  todo: Todo;
}

// ang TodoItem ay siyang design 
// at ang ': TodoItemProps' ay siyang nagvvalidate na dapat kung ano ang nasa rules
// o requirements ay yun lamang ang masusunod
export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 bg-white hover:bg-slate-50">
        <input type="checkbox" className="scale-125" />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

//////////////// ANALOGY /////////////////
// Kung ang TodoItem ay isang Form na fi-fill up-an, 
// ang TodoItemProps naman ang mga required fields na bawal maging blank