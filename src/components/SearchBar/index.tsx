import { useState } from "react";
import { User } from "../../types/UserTypes";
import { SearchComponentProps } from "../../types/SearchBarTypes";
import { fetchGithubUsers } from "../../services/githubUsers";
import { TextField, Button, Typography } from "@mui/material";

function SearchBar({ results, setResults }: SearchComponentProps) {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const users = await fetchGithubUsers(query);
      setResults(users);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <div>
      <Typography variant="h5">Buscar usuarios de GitHub</Typography>
      <TextField
        label="Nombre de usuario"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {results.map((user: User) => {
        return <p key={user.login}>{user.login}</p>;
      })}
    </div>
  );
}

export default SearchBar;
