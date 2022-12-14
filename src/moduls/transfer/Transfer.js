import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Transfer() {
  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body"></div>
      <div className="body-action">
        <div className="body-action-item">
          <button>Edit </button>
        </div>
      </div>
      <div className="body-content">
        <div className="account-inputs"></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Transfer;
