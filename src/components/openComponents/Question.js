import { useNavigate } from "react-router-dom";

function Question({ closeModal }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Start");
    navigate("/logout", { replace: true });
    console.log("End");
  };

  return (
    <div className="question">
      <div className="logRegInputs">
        <h4>Do You really want to leave ?</h4>
      </div>
      <div className="logRegButtons">
        <button onClick={handleSubmit}> Yes </button>
        <button className="buttonCancel" onClick={() => closeModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Question;
