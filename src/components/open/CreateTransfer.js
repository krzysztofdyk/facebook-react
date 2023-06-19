import { useState } from "react";
//import axios from "axios";

function CreateTransfer(props) {
  const [title, setTitle] = useState("pizza");
  const [amount, setAmount] = useState("12");
  const [currency, setCurrency] = useState("PLN");
  const [toAccountId, setToAccountId] = useState("1");

  const fetchSubmit = () => {
    console.log(title, amount, currency, toAccountId);
    console.log("Start transfer.");
    console.log(`${props.id}`);

    const accountId = localStorage.getItem("idCookie");

    fetch(`http://localhost:8080/transfers/${accountId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("tokenCookie"),
      },
      body: JSON.stringify({
        title,
        amount,
        currency,
        toAccountId,
      }),
    });
    props.closeModal(false);
    console.log("End transfer.");
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
