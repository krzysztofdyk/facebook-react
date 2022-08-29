import { useState } from "react";
import Login from "../../components/openComponents/Login";
import Footer from "../../Components/Footer";

function Logout() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <div className="container">
      <div className="header"></div>
      <div className="body">
        <div className="bodyText">
          <p>Feeling so bad,</p>
          <p>You are leaving Us! :(</p>
        </div>
        <div className="welcomeButtons">
          <button onClick={() => setOpenLoginModal(true)}>Login</button>
        </div>
        {openLoginModal && <Login closeModal={setOpenLoginModal} />}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Logout;
