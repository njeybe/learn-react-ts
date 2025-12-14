import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";

function App() {
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="text-5xl font-bold text-center">My Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
