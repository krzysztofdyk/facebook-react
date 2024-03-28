import axios from "axios";

function DownloadTransfers() {
  const idVisual = localStorage.getItem("idCookie");
  const token = localStorage.getItem("tokenCookie");

  const downloadWord = ({ id }) => {
    axios.get(`http://localhost:8080/api/accounts/accounts-history/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  downloadWord({ id: idVisual });
  console.log("The file was downloaded.");
}

export default DownloadTransfers;
