import { useEffect, useState } from "react";
import API_BASE_URL from "./config/api";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/users/getAllUsers`);
        if (!res.ok) {
          throw new Error("API failed");
        }
        const data = await res.json();
        console.log("API Response:", data);
        setUsers(data.data || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>DEV FRONTEND 🚀</h1>

      <h2>Users:</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
