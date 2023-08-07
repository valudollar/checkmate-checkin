import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Scan() {
  const location = useLocation();
  const navigate = useNavigate();
  const [airline, setAirline] = useState(location.state.airline);
  const [loading, setLoading] = useState(false);

  function handleScan() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/passport", {
        state: { airline: airline },
      });
    }, 1000);
  }

  return (
    <>
      <div className="scanDiv">
        <h1>PLEASE SCAN YOUR PASSPORT</h1>
        {loading ? <div className="loader"></div> : null}
        <button onClick={handleScan}>Scan Passport</button>
      </div>
    </>
  );
}

export default Scan;
