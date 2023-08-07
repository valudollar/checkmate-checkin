import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import sia from "../assets/SIA.png";
import united from "../assets/UNITED.png";
function Airline() {
  const navigate = useNavigate();
  const [airline, setAirline] = useState("");

  function handleAirline(e) {
    const selectedAirline = e.target.getAttribute("value");
    setAirline(selectedAirline);
  }

  function handleConfirm() {
    console.log(airline);
    navigate("/scan", {
      state: { airline: airline },
    });
  }
  return (
    <>
      <div className="airlineBody">
        <h1>Please select your airline</h1>
        <div className="airlineDiv">
          <button className="airlineButton">
            <img
              className="airlineImage"
              src={sia}
              onClick={handleAirline}
              value="Singapore Airlines"
            ></img>
          </button>
          <button className="airlineButton">
            <img
              className="airlineImage"
              src={united}
              onClick={handleAirline}
              value="United Airlines"
            ></img>
          </button>
        </div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </>
  );
}

export default Airline;
