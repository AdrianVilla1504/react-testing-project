import { User } from "./UserTypes";

export interface SearchComponentProps {
  results: User[];
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
}
