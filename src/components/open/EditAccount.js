import { useState } from "react";
//import axios from "axios";

function EditAccount(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [city, setCity] = useState(props.city);

  const fetchAccount = () => {
    console.log(firstName, lastName, email, city);
    fetch(`http://localhost:8080/api/accounts/${props.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        city,
      }),
    });
    props.closeModal(false);
    // eslint-disable-next-line no-restricted-globals
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
        <button onClick={fetchAccount}>Send</button>
        <button className="button-cancel" onClick={() => props.closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditAccount;
