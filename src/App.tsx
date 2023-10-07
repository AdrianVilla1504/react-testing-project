import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ListUsers from "./components/ListUsers";
import { User } from "./types/UserTypes";

import "./App.css";

function App() {
  const [results, setResults] = useState<User[]>([]);

  return (
    <>
      <SearchBar setResults={setResults} />
      <ListUsers users={results}/>
    </>
  );
}

export default App;
