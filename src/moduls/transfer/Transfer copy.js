import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import QuestionDelete from "../../components/open/QuestionDelete";
import CreateTransfer from "../../components/open/CreateTransfer";
import axios from "axios";

function Transfer() {
  const [openCreateTransferModal, setCreateTransferModal] = useState(false);
  const [openEditTarnsferModal, setEditTransferModal] = useState(false);
  const [openQuestionDeleteModal, setOpenQuestionDeleteModal] = useState(false);
  const [responseData, setResponseData] = useState([]);

  function handleCreateTransferModal() {
    setCreateTransferModal(true);
    setEditTransferModal(false);
    setOpenQuestionDeleteModal(false);
  }

  function handleEditTransferModal() {
    setCreateTransferModal(false);
    setEditTransferModal(true);
    setOpenQuestionDeleteModal(false);
  }

  function handleOpenQuestionDeleteModal() {
    setCreateTransferModal(false);
    setEditTransferModal(false);
    setOpenQuestionDeleteModal(true);
  }

  const myTransfer = responseData[0];

  // useEffect(() => {
  //   const getTransfers = () => {
  //     fetch(`http://localhost:8080/transfers`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + localStorage.getItem("tokenCookie"),
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setResponseData(data));

  //     console.log("Transfers list: start");
  //     console.log(responseData[0]);
  //     console.log(responseData[0].amount);
  //     console.log("Transfers list: end");
  //   };
  //   getTransfers();
  // }, []);

  // useEffect(() => {
  //   const fetchTransfers = () => {
  //     axios
  //       .get(`http://localhost:8080/transfers`, {
  //         headers: { Authorization: "Bearer " + localStorage.getItem("tokenCookie") },
  //       })
  //       .then((data) => setResponseData(data));
  //   };
  //   console.log("Transfers list: start");
  //   console.log(responseData[0]);
  //   console.log("Transfers list: end");
  //   fetchTransfers();
  // }, []);

  const getTransfers = () => {
    fetch(`http://localhost:8080/transfers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("tokenCookie"),
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data));

    console.log("Transfers list: start");
    console.log(responseData[0]);
    console.log(responseData[0].amount);
    console.log("Transfers list: end");
  };

  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-buttons">
          <button className="button-cancel" onClick={handleOpenQuestionDeleteModal}>
            Delete
          </button>
          <button onClick={getTransfers()}>Get Transfers </button>
          <button onClick={handleCreateTransferModal}>Create transfer </button>
        </div>
        <div className="body-content">
          <div className="account-inputs">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{responseData.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {openCreateTransferModal && <CreateTransfer closeModal={setCreateTransferModal} />}
        {openQuestionDeleteModal && <QuestionDelete closeModal={setOpenQuestionDeleteModal} />}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Transfer;
