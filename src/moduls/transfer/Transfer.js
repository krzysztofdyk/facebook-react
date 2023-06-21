import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import QuestionDelete from "../../components/open/QuestionDelete";
import CreateTransfer from "../../components/open/CreateTransfer";

function Transfer() {
  const [id, setId] = useState(0);

  const [openCreateTransferModal, setCreateTransferModal] = useState(false);
  const [openEditTarnsferModal, setEditTransferModal] = useState(false);
  const [openQuestionDeleteModal, setOpenQuestionDeleteModal] = useState(false);

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

  const data = [
    {
      id: "1",
      title: "pizza",
      amount: "100",
      currency: "PLN",
      sender: "Kris",
      receiver: "Anna",
      date: "2022-10-15",
      time: "20:09",
    },
    {
      id: "2",
      title: "kino",
      amount: "100",
      currency: "PLN",
      sender: "Kris",
      receiver: "Anna",
      date: "2022-10-15",
      time: "20:09",
    },
    {
      id: "3",
      title: "zakupy",
      amount: "100",
      currency: "PLN",
      sender: "Kris",
      receiver: "Anna",
      date: "2022-10-15",
      time: "20:09",
    },
  ];

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
          <button onClick={handleEditTransferModal}>Edit </button>
          <button onClick={handleCreateTransferModal}>Create transfer </button>
        </div>
        <div className="body-content">
          <div className="account-inputs">
            <div className="mytable">
              <table>
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
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.id}</td>
                      <td>{val.title}</td>
                      <td>{val.amount}</td>
                      <td>{val.currency}</td>
                      <td>{val.sender}</td>
                      <td>{val.receiver}</td>
                      <td>{val.date}</td>
                      <td>{val.time}</td>
                    </tr>
                  );
                })}
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
