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
          <div className="account-inputs"></div>
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
