import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ closeModal }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(login, password);
    console.log("Start login request.");
    fetch("http://localhost:8080/api/accounts/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
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
      </div>
      <div className="open-buttons">
        <button onClick={handleSubmit}> Send </button>
        <button className="button-cancel" onClick={() => closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Login;
