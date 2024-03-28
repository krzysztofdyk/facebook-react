import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ closeModal }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:8080/authenticate";
  const httpOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login,
      password,
    }),
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(url, httpOptions);
      const json = await response.json();
      localStorage.setItem("tokenCookie", json.jwtTokenJava);
      localStorage.setItem("loginCookie", json.loginJava);
      localStorage.setItem("idCookie", json.idJava);
      closeModal(true);
      navigate("/kmd", { replace: true });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="open">
      <div className="open-header" onClick={() => closeModal(false)}>
        X
      </div>
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
