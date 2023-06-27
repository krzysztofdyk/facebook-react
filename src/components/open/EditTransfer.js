import { useState } from "react";
//import axios from "axios";

function EditTransfer(props) {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const [fromAccountId, setFromAccountId] = useState();
  const [toAccountId, setToAccountId] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const fetchAccount = () => {
    fetch(`http://localhost:8080/transfers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("tokenCookie"),
      },
      body: JSON.stringify({
        id,
        title,
        amount,
        currency,
        //fromAccountId,
        //toAccountId,
        //date,
        //time,
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
        <div className="open-input">
          <label> Title </label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Amount </label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Currency </label>
          <input value={currency} onChange={(event) => setCurrency(event.target.value)} />
        </div>
        <div className="open-input">
          <label>FromAccountId </label>
          <input value={fromAccountId} onChange={(event) => setFromAccountId(event.target.value)} />
        </div>
        <div className="open-input">
          <label> ToAccountId</label>
          <input value={toAccountId} onChange={(event) => setToAccountId(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Date </label>
          <input value={date} onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="open-input">
          <label> Time </label>
          <input value={time} onChange={(event) => setTime(event.target.value)} />
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

export default EditTransfer;
