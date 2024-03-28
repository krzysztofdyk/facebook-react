import { useState } from "react";
//import axios from "axios";

function EditAccount(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [city, setCity] = useState(props.city);

  const url = `http://localhost:8080/api/accounts/${props.id}`;
  const httpOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("tokenCookie"),
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      city,
    }),
  };

  const fetchAccount = () => {
    fetch(url, httpOptions);
    props.closeModal(false);
    //eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="open">
      <div className="open-inputs">
        <div className="open-input">
          <label> First Name </label>
          <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Last Name </label>
          <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Email </label>
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="open-input">
          <label> City </label>
          <input value={city} onChange={(event) => setCity(event.target.value)} />
        </div>
      </div>
      <div className="open-buttons">
        <button onClick={fetchAccount}>Save</button>
        <button className="button-cancel" onClick={() => props.closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditAccount;
