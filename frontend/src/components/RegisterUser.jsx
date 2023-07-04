import React, { useState } from "react";
import "../styles/registerUser.css";
import { useNavigate } from "react-router-dom";
function RegisterUser() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response data:", responseData);
        navigate("/landing-page");
      } else {
        console.error("Response error:", response.status);
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="wrapper">
      <h2 className="title">Registriere dich jetzt und fahre mit!</h2>
      <form>
        <div className="field">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
        </div>
        <div className="field">
          <input
            placeholder="E-Mail-Adresse"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="text"
          />
        </div>
        <div className="field">
          <input
            placeholder="Kennwort"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
          />
        </div>
        <div className="btn-wrapper">
          <button className="submit-btn" onClick={createUser} type="submit">
            Registrieren
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterUser;
