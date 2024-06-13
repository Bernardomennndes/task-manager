import { Tasks } from "./components/Tasks";
import { SWRProvider } from "./components/provider/SWRProvider";
import TaskPage from "./container/task-list/page";

function App() {
  return (
    <SWRProvider>
      <main className="min-h-screen w-screen p-4">
        <TaskPage />
      </main>
    </SWRProvider>
  );
}

export default App;
