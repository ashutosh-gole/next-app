import { sort } from "fast-sort";
import Link from "next/link";

interface Props {
  sortOrder: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users2", {
    cache: "no-store",
    // next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-borderd">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>

      <tbody>
        {sortedUsers.map((sortedUser) => (
          <tr key={sortedUser.id}>
            <td>{sortedUser.name}</td>
            <td>{sortedUser.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
