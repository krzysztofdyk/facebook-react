import { useState } from "react";
//import axios from "axios";

function ChangePassword({ closeModal }) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = () => {
    console.log(password, repeatPassword);
    fetch("http://localhost:8080/api/accounts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        repeatPassword,
      }),
    });
    closeModal(false);
  };

  return (
    <div className="open">
      <div className="open-input">
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

export default ChangePassword;
