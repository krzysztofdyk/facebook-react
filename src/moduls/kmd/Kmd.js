import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";

function Kmd() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const fetchAccount = ({ id }) => {
      axios
        .get(`http://localhost:8080/api/accounts/${id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then(({ data }) => {
          setFirstName(data.firstName);
        });
    };
    fetchAccount({ id: localStorage.getItem("accountId") });
  }, []);

  return (
    <div className="page">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-content">
          <div className="body-text">
            <p>So happy to see You, {firstName} !</p>
            <p>Have a fun ! :)</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Kmd;
