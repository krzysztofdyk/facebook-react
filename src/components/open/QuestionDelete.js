import { useNavigate } from "react-router-dom";

function QuestionDelete({ closeModal }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Start");
    navigate("/logout", { replace: true });
    console.log("End");
  };

  return (
    <div className="open">
      <div className="open-input">
        <h3>Do You want to delete your account from our service ?</h3>
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

export default QuestionDelete;
