import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ChangePassword from "../../components/openComponents/ChangePassword";
import EditAccount from "../../components/openComponents/EditAccount";

function Account() {
  const [openEditAccountModal, setEditAccountModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState(0);

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
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="accountInputs">
          <div className="accountInputsOne">
            <div className="field1"> First Name: </div>
            <div className="field2">{firstName}</div>
          </div>
          <div className="accountInputsOne">
            <div className="field1"> Last Name </div>
            <div className="field2">{lastName}</div>
          </div>
          <div className="accountInputsOne">
            <div className="field1">Email </div>
            <div className="field2">{email}</div>
          </div>
          <div className="accountInputsOne">
            <div className="field1"> City </div>
            <div className="field2">{city}</div>
          </div>
        </div>
        <div className="accountButtons">
          <button onClick={() => setEditAccountModal(true)}>Edit </button>
          <button onClick={() => setChangePasswordModal(true)}>Change password </button>
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
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Account;
