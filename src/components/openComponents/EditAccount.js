import { useState } from "react";
//import axios from "axios";

function EditAccount(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [city, setCity] = useState(props.city);

  const handleSubmit = () => {
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
    <div className="logReg">
      <div className="logRegInputs">
        <div className="logRegInputsOne">
          <label> First Name </label>
          <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="logRegInputsOne">
          <label> Last Name </label>
          <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className="logRegInputsOne">
          <label> Email </label>
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="logRegInputsOne">
          <label> City </label>
          <input value={city} onChange={(event) => setCity(event.target.value)} />
        </div>
      </div>
      <div className="logRegButtons">
        <button onClick={handleSubmit}>Send</button>
        <button className="buttonCancel" onClick={() => props.closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditAccount;
