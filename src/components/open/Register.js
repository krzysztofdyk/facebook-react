import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(firstName, lastName, email, city, login, password);
    console.log("Start register request.");
    fetch("http://localhost:8080/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        city,
        login,
        password,
        repeatPassword,
      }),
    });
    closeModal(false);
    navigate("/kmd", { replace: true });
    console.log("End register request.");
  };

  return (
    <div className="open">
      <div className="open-inputs">
        <div className="open-input">
          <label> First Name </label>
          <input
            placeholder="Input first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Last Name </label>
          <input
            placeholder="Input last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Email </label>
          <input
            placeholder="Input email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> City </label>
          <input
            placeholder="Input city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Login </label>
          <input
            placeholder="Input login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Password </label>
          <input
            type="password"
            placeholder="Input password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Repeat Password </label>
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="open-buttons">
        <button onClick={handleSubmit}>Send</button>
        <button className="button-cancel" onClick={() => closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Register;
