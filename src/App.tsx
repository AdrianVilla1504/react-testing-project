import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { User } from "./types/UserTypes";
import "./App.css";

function App() {
  const [results, setResults] = useState<User[]>([]);

  return (
    <>
      <SearchBar results={results} setResults={setResults} />
    </>
  );
}

export default App;
