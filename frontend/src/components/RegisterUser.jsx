import React, { useState } from "react";
import "../styles/registerUser.css";

function RegisterUser() {
  const [data, setData] = useState({});

  const createUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="wrapper">
      <div className="title">Register Form</div>
      <form>
        <div className="field">
          <input
            type="text"
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
          <label>Username</label>
        </div>
        <div className="field">
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="text"
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
          />
          <label>Password</label>
        </div>
        <div className="field">
          <input onClick={createUser} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default RegisterUser;
