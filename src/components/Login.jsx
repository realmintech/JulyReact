import React, { useState } from "react";
import Button from "./Button";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleLogin = () => {
    const arr = []
    arr.push(email, name)
    localStorage.setItem(email, JSON.stringify(arr));
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <a href="/" onClick={handleLogin}>
          <Button title="Login" />
        </a>
      </form>
    </>
  );
};

export default Login;
