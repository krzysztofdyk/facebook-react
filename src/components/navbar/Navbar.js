import { Link } from "react-router-dom";
import Question from "./openComponents/Question";
import { useState } from "react";

function Navbar() {
  const [openQuestionModal, setQuestionModal] = useState(false);

  return (
    <div className="navbar">
      <div className="navbarItem">
        <Link to="/main" className="link">
          KMD
        </Link>
      </div>
      <div className="navbarItem">
        <Link to="/account" className="link">
          Account
        </Link>
      </div>
      <div className="navbarItem">
        <Link to="/transfer" className="link">
          Transfer
        </Link>
      </div>
      <div className="navbarItem">
        <Link to="/reservation" className="link">
          Reservation
        </Link>
      </div>
      <div className="justSpace"></div>
      <div>
        <button className="buttonLogout" onClick={() => setQuestionModal(true)}>
          Logout
        </button>
        {openQuestionModal && <Question closeModal={setQuestionModal} />}
      </div>
    </div>
  );
}

export default Navbar;
