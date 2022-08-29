import { useState } from "react";
import Login from "../../components/Open/Login";
import Register from "../../components/Open/Register";
import Footer from "../../components/Footer";

function Welcome() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
  }
  function handleRegisterLoginModal() {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  }

  return (
    <div className="container">
      <div className="header"></div>
      <div className="body">
        <div className="bodyText">
          <p>Hello, everything You need to do is log in!</p>
          <p>Enjoy and have a fun! :)</p>
        </div>
        <div className="welcomeButtons">
          <button onClick={handleOpenLoginModal}>Login</button>
          <button onClick={handleRegisterLoginModal}>Register</button>
        </div>
        {openLoginModal && <Login closeModal={setOpenLoginModal} />}
        {openRegisterModal && <Register closeModal={setOpenRegisterModal} />}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Welcome;
