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
  const [loading, setLoading] = useState(false);

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

  // const getTransfers = useCallback(() => {
  //   const token = localStorage.getItem("tokenCookie")
  //   axios
  //       .get(`http://localhost:8080/transfers`, {
  //         headers: { Authorization: "Bearer " + token },
  //       })
  //       .then(({data}) => setResponseData(data))
  //       // .then((res) => setResponseData(res.data))
  //       .catch((err) => console.error(err));
  // // [] - renders only on init
  // // [variable] - renders only when variable changes/updates
  // }, [])

  useEffect(() => {
    // getTransfers() -> add function to dependencies array and remove below token with axios

    setLoading(true);
    const token = localStorage.getItem("tokenCookie");
    axios
      .get(`http://localhost:8080/transfers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(({ data }) => setResponseData(data))
      // .then((res) => setResponseData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
    // empty -> renders every time component Transfer is rerendered
    // [] - renders only on init
    // [variable] - renders only when variable changes/updates
  }, []);

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
          {/* // <button onClick={() => getTransfers()}>Get Transfers </button> */}
          {/* <button onClick={getTransfers}>Get Transfers</button> */}
          <button onClick={handleCreateTransferModal}>Create transfer </button>
        </div>
        <div className="body-content">
          <div className="account-inputs">
            <div className="table">
              <table className="styled-table">
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
                  {responseData.length ? (
                    responseData
                      .filter((item) => item.fromAccountId == localStorage.getItem("idCookie"))
                      .map(
                        ({
                          id,
                          title,
                          amount,
                          currency,
                          fromAccountId,
                          toAccountId,
                          date,
                          time,
                        }) => (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                            <td>{fromAccountId}</td>
                            <td>{toAccountId}</td>
                            <td>{Date.parse(date)}</td>
                            <td>{toString.apply(time)}</td>
                          </tr>
                        ),
                      )
                  ) : (
                    <tr>
                      <td colSpan={8}>
                        {loading ? "Spinner component here" : "No data available"}
                      </td>
                    </tr>
                  )}
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
