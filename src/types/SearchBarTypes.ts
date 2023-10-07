import { User } from "./UserTypes";

export interface SearchComponentProps {
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
}
