import { useEffect } from "react";
import { User } from "../../types/UserTypes";
import { fetchGithubUsers } from "../../services/githubUsers";

function SearchBar({ results, setResults }: any) {
  const query = "Adrian";
  const handleSearch = async () => {
    try {
      const users = await fetchGithubUsers(query);
      setResults(users);
    } catch (err) {
      setResults([]);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [!results]);

  return (
    <div>
      {results.map((user: User) => {
        return <p key={user.login}>{user.login}</p>;
      })}
    </div>
  );
}

export default SearchBar;
