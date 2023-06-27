import axios from "axios";

function DownloadTransfers() {
  const idVisual = localStorage.getItem("idCookie");
  console.log("The file was downloaded.");

  const downloadWord = ({ id }) => {
    const token = localStorage.getItem("tokenCookie");
    axios.get(`http://localhost:8080/api/accounts/accounts-history/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  downloadWord({ id: idVisual });
}

export default DownloadTransfers;
