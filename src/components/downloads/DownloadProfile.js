import axios from "axios";

function DownloadProfile() {
  const idVisual = localStorage.getItem("idCookie");
  const tokenVisual = localStorage.getItem("tokenCookie");

  const downloadWord = ({ id }, { token }) => {
    axios.get(`http://localhost:8080/api/accounts/profile/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + { token },
      },
    });
  };

  downloadWord({ id: idVisual }, { token: tokenVisual });
  console.log("The file was downloaded.");
}

export default DownloadProfile;
