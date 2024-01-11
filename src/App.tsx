import { useGetStatusPage } from "./hooks";

function App() {
  const { responses, isLoading } = useGetStatusPage()

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="App">
      <p>{JSON.stringify(responses)}</p>
    </div>
  );
}

export default App;
