import Navbar from "../Navbar";
import Footer from "./Footer";

function Main() {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="bodyText">
          <p>So happy to see You </p>
          <p>Have a fun ! :)</p>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
