import { useState } from "react";
//import axios from "axios";

function DeleteTransfer(props) {
  const [id, setId] = useState();

  const token = localStorage.getItem("tokenCookie");

  const fetchTransfer = () => {
    fetch(`http://localhost:8080/transfers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        id,
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
          <label> Id </label>
          <input value={id} onChange={(event) => setId(event.target.value)} />
        </div>
      </div>
      <div className="open-buttons">
        <button onClick={fetchTransfer}>Delete</button>
        <button className="button-cancel" onClick={() => props.closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteTransfer;
