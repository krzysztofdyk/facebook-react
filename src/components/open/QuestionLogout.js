import { useNavigate } from "react-router-dom";

function QuestionLogout({ closeModal }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Start");
    navigate("/logout", { replace: true });
    localStorage.setItem("accountId", null);
    console.log("End");
  };

  return (
    <div className="open">
      <div className="open-input">
        <h5>Do You really want to leave ?</h5>
      </div>
      <div>
        <button onClick={handleSubmit}> Yes </button>
        <button className="button-cancel" onClick={() => closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default QuestionLogout;
