import { useLocation, useNavigate } from "react-router-dom";

function Print() {
  const navigate = useNavigate();
  function complete() {
    navigate("/");
  }
  return (
    <>
      <h1>Printing 1 of 3 Tags...</h1>
      <div className="buttonDiv">
        <button onClick={complete}>Complete</button>
      </div>
    </>
  );
}

export default Print;
