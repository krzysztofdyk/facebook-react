import { useState } from "react";
//import axios from "axios";

function CreateTransfer(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [toAccountId, setToAccountId] = useState("");

  const token = localStorage.getItem("tokenCookie");
  const accountId = localStorage.getItem("idCookie");

  const url = `http://localhost:8080/transfers/${accountId}`;
  const httpOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      title,
      amount,
      currency,
      toAccountId,
    }),
  };

  const fetchSubmit = () => {
    fetch(url, httpOptions);
    props.closeModal(false);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="open">
      <div className="open-inputs">
        <div className="open-input">
          <label> Title </label>
          <input
            placeholder="Input title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Amount </label>
          <input
            placeholder="Input amount of money"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> Currency </label>
          <input
            placeholder="Input currency"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          />
        </div>
        <div className="open-input">
          <label> ToAccountId </label>
          <input
            placeholder="Input id of the receiver"
            value={toAccountId}
            onChange={(event) => setToAccountId(event.target.value)}
          />
        </div>
      </div>
      <div className="open-buttons">
        <button onClick={fetchSubmit}>Send</button>
        <button className="button-cancel" onClick={() => props.closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateTransfer;
