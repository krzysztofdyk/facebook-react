import axios from "axios";

function DownloadProfile() {
  const downloadWord = ({ id }, { token }) => {
    axios.get(`http://localhost:8080/api/accounts/profile/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + { token },
      },
    });
  };

  const idVisual = localStorage.getItem("idCookie");
  const tokenVisual = localStorage.getItem("tokenCookie");

  console.log("The file was downloaded.");

  downloadWord({ id: idVisual }, { token: tokenVisual });
}

export default DownloadProfile;
