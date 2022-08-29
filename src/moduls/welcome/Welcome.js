import { useState } from "react";
import Login from "../../components/open/Login";
import Register from "../../components/open/Register";
import Footer from "../../components/footer/Footer";

function Welcome() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
  }
  function handleOpenRegisterModal() {
    setOpenLoginModal(false);
    setOpenRegisterModal(true);
  }

  return (
    <div className="page">
      <div className="header"></div>
      <div className="body">
        <div className="body-content">
          <div className="body-text">
            <p>Hello, everything You need to do is log in!</p>
            <p>Enjoy and have a fun! :)</p>
          </div>
          <div className="body-action-welcome">
            <button onClick={handleOpenLoginModal}>Login</button>
            <button onClick={handleOpenRegisterModal}>Register</button>
          </div>
          {openLoginModal && <Login closeModal={setOpenLoginModal} />}
          {openRegisterModal && <Register closeModal={setOpenRegisterModal} />}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Welcome;
