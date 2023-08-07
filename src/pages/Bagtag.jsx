import { useLocation, useNavigate } from "react-router-dom";

function Bagtag() {
  const navigate = useNavigate();
  function confirm() {
    navigate("/print");
  }
  return (
    <>
      <div className="tagBody"></div>
      <div className="buttonDiv">
        <button onClick={confirm}>Confirm Details</button>
      </div>
    </>
  );
}

export default Bagtag;
