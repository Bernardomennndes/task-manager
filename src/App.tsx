import { SWRProvider } from "./components/provider/SWRProvider";

function App() {
  
  return (
    <SWRProvider>
      <main className="min-h-screen w-screen p-4">
      </main>
    </SWRProvider>
  );
}

export default App;
