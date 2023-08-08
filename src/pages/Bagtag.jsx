import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Bagtag() {
  const location = useLocation();
  const data = location.state.data;
  const destination = location.state.destination;
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (destination === "Narita") {
      setCode("NRT");
    } else if (destination === "San Francisco") {
      setCode("SFO");
    } else if (destination === "Osaka") {
      setCode("KIX");
    }
  }, []);

  function confirm() {
    navigate("/print", {
      state: { data: data },
    });
  }
  return (
    <>
      <div className="bagtagDiv">
        <h1>Baggage Tags</h1>
        <div className="buttonDiv">
          <button onClick={confirm}>Confirm Details</button>
        </div>
        <div className="tagsDiv">
          {Object.entries(data).map(([bagNumber, bagInfo]) => (
            <div className="tagBody">
              <div key={bagNumber} className="tag">
                <h3>Bag {bagNumber}</h3>
                <h3>Type: {bagInfo.type}</h3>
                <h3>Weight: {bagInfo.weight} kg</h3>
                <div>
                  <h1>SIN</h1>
                  <p>to</p>
                  <h1>{code}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bagtag;
