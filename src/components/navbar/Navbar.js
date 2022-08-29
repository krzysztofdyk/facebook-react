import { Link } from "react-router-dom";
import { useState } from "react";
import QuestionLogout from "../open/QuestionLogout";

function Navbar() {
  const [openQuestionModal, setQuestionModal] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-part">
        <div className="navbar-part-item">
          <Link to="/kmd" className="link">
            KMD
          </Link>
        </div>
      </div>
      <div className="navbar-part">
        <div className="navbar-part-item">
          <Link to="/account" className="link">
            Account
          </Link>
        </div>
        <div className="navbar-part-item">
          <Link to="/transfer" className="link">
            Transfer
          </Link>
        </div>
        <div className="navbar-part-item">
          <Link to="/reservation" className="link">
            Reservation
          </Link>
        </div>
      </div>

      <div className="navbar-part">
        <div>
          <button className="button-logout" onClick={() => setQuestionModal(true)}>
            Logout
          </button>
          {openQuestionModal && <QuestionLogout closeModal={setQuestionModal} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
