import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ChangePassword from "../../components/open/ChangePassword";
import EditAccount from "../../components/open/EditAccount";
import QuestionDelete from "../../components/open/QuestionDelete";

function Account() {
  const [openEditAccountModal, setEditAccountModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [openQuestionDelete, setOpenQuestionDelete] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState(0);

  function handleOpenEditAccountModal() {
    setEditAccountModal(true);
    setChangePasswordModal(false);
    setOpenQuestionDelete(false);
  }

  function handleOpenChangePasswordModal() {
    setEditAccountModal(false);
    setChangePasswordModal(true);
    setOpenQuestionDelete(false);
  }

  function handleOpenQuestionDeleteModal() {
    setEditAccountModal(false);
    setChangePasswordModal(false);
    setOpenQuestionDelete(true);
  }

  useEffect(() => {
    const fetchAccount = ({ id }) => {
      axios.get(`http://localhost:8080/api/accounts/${id}`).then(({ data }) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setCity(data.city);
        setId(data.id);
      });
    };
    fetchAccount({ id: 1 });
  }, []);

  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-action">
          <div className="body-action-item">
            <button className="button-cancel" onClick={handleOpenQuestionDeleteModal}>
              Delete
            </button>
          </div>
          <div className="body-action-item">
            <button onClick={handleOpenChangePasswordModal}>Change password </button>
          </div>
          <div className="body-action-item">
            <button onClick={handleOpenEditAccountModal}>Edit </button>
          </div>
        </div>
        <div className="body-content">
          <div className="account-inputs">
            <div className="account-input">
              <div className="field-1"> First Name: </div>
              <div className="field-2">{firstName}</div>
            </div>
            <div className="account-input">
              <div className="field-1"> Last Name </div>
              <div className="field-2">{lastName}</div>
            </div>
            <div className="account-input">
              <div className="field-1">Email </div>
              <div className="field-2">{email}</div>
            </div>
            <div className="account-input">
              <div className="field-1"> City </div>
              <div className="field-2">{city}</div>
            </div>
          </div>
        </div>
        {openEditAccountModal && (
          <EditAccount
            closeModal={setEditAccountModal}
            firstName={firstName}
            lastName={lastName}
            email={email}
            city={city}
            id={id}
          />
        )}
        {changePasswordModal && <ChangePassword closeModal={setChangePasswordModal} />}
        {openQuestionDelete && <QuestionDelete closeModal={setOpenQuestionDelete} />}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Account;
