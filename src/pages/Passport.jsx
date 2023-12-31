import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Passport() {
  const navigate = useNavigate();
  const location = useLocation();
  const [airline, setAirline] = useState(location.state.airline);
  const [flightnumber, setFlightNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [pnr, setPNR] = useState("");

  useEffect(() => {
    generateFlightNumber();
    generatePNR();
  }, []);

  function generateFlightNumber() {
    let details = 0;
    if (airline === "Singapore Airlines") {
      const numbers = [
        { number: "SQ32", destination: "San Francisco" },
        { number: "SQ34", destination: "San Francisco" },
        { number: "SQ618", destination: "Osaka" },
        { number: "SQ622", destination: "Osaka" },
        { number: "SQ12", destination: "Narita" },
        { number: "SQ638", destination: "Narita" },
      ];
      details = numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (airline === "United Airlines") {
      const numbers = [
        { number: "UA2", destination: "San Francisco" },
        { number: "UA28", destination: "San Francisco" },
        { number: "UA8014", destination: "Narita" },
        { number: "UA7934", destination: "Narita" },
      ];

      details = numbers[Math.floor(Math.random() * numbers.length)];
    }
    setFlightNumber(details.number);
    setDestination(details.destination);
  }

  function generatePNR() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPNR(result);
  }

  function confirm() {
    navigate("/baggage", {
      state: { destination: destination },
    });
  }
  return (
    <>
      <div className="details">
        <div className="flightDetails">
          <h1>Flight Details</h1>
          <div className="detailContent">
            <div className="detailLabels">
              <h2>Airline :</h2>
              <h2>Flight Number :</h2>
              <h2>PNR :</h2>
              <h2>Date : </h2>
              <h2>Time : </h2>
              <h2>From : </h2>
              <h2>To : </h2>
              <h2>Gate : </h2>
              <h2>Class : </h2>
              <h2>Seat : </h2>
            </div>
            <div className="detailValues">
              <h2>{airline}</h2>
              <h2>{flightnumber}</h2>
              <h2>{pnr}</h2>
              <h2>15 August 2023 </h2>
              <h2>12.30pm</h2>
              <h2>Singapore</h2>
              <h2>{destination}</h2>
              <h2>3</h2>
              <h2>F</h2>
              <h2>43B</h2>
            </div>
          </div>
        </div>
        <div className="passportDetails">
          <h1>Passport Details</h1>
          <div className="detailContent">
            <div className="detailLabels">
              <h2>Passport Number :</h2>
              <h2>Name : </h2>
              <h2>Sex :</h2>
              <h2>Country Code : </h2>
              <h2>Nationality :</h2>
              <h2>National ID :</h2>
              <h2>Date of Birth :</h2>
              <h2>Date of Expiry :</h2>
            </div>
            <div className="detailValues">
              <h2>K1234567E</h2>
              <h2>John Tan </h2>
              <h2>M</h2>
              <h2>SGP</h2>
              <h2>Singapore</h2>
              <h2>T0012345A</h2>
              <h2>12 Feb 2000</h2>
              <h2>30 Oct 2032</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonDiv">
        <button onClick={confirm}>Confirm Details</button>
      </div>
    </>
  );
}

export default Passport;
