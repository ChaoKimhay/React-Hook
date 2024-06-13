import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { CardComponent } from "./components/CardComponent";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState([]);

  const BASE_URL = "https://dummyjson.com/";

  function handleCount() {
    setCount(count + 1);
    console.log(count + 1);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  async function fetchData() {
    try {
      const response = await fetch(BASE_URL + "users");
      const data = await response.json();
      console.log(data.users);
      setUsers(data?.users);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMsg("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavbarComponent />
      {errorMsg && <div>{errorMsg}</div>}
      <div className="flex flex-wrap justify-center gap-7 mt-10">
        {users.map((user) => (
          <div key={user.id}>
            <CardComponent profile={user.image} lastname={user.lastName} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
