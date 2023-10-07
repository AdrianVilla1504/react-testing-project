import {User} from '../../types/UserTypes';
import {ListUsersProps} from '../../types/ListUsersTypes';

function ListUsers({ users } : ListUsersProps) {
  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <img src={user.avatar_url} alt={user.login} width="100" height="100" />
          </a>
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  );
}

export default ListUsers;
