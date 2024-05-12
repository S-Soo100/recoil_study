"use client";
import { useEffect, useState } from "react";

const CounterPage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("https://randomuser.me/api/");
      console.log("response");
      console.log(response);
      const data = await response.json();
      console.log("data");
      console.log(data);
      setUser(data);
    }

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>User name: {user.results[0].name.first}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CounterPage;
