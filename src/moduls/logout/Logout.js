import { useState } from "react";
import Login from "../../components/open/Login";
import Footer from "../../components/footer/Footer";

function Logout() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <div className="page">
      <div className="header"></div>
      <div className="body">
        <div className="body-content">
          <div className="body-text">
            <p>Feeling so bad,</p>
            <p>You are leaving Us! :(</p>
          </div>
          <div className="welcomeButtons">
            <button onClick={() => setOpenLoginModal(true)}>Login</button>
          </div>
          {openLoginModal && <Login closeModal={setOpenLoginModal} />}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Logout;
