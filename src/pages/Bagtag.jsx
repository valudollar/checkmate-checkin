import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Bagtag() {
  const location = useLocation();
  const data = location.state.data;
  const navigate = useNavigate();

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
                <p>Type: {bagInfo.type}</p>
                <p>Weight: {bagInfo.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bagtag;
