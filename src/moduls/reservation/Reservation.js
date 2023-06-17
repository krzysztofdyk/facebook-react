import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Reservation() {
  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body"></div>
      <div className="body-buttons">
        <button className="button-cancel"> Delete</button>
        <button>Edit </button>
        <button>Create reservation </button>
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

export default Reservation;
