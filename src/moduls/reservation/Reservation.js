import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Reservation() {
  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-action-item">
          <button>Send</button>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Reservation;
