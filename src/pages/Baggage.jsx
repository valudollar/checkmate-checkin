import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Baggage() {
  const [number, setNumber] = useState("1");
  const navigate = useNavigate();
  function handleconfirm() {
    navigate("/bag/1", {
      state: { number: number },
    });
  }
  function handleNumber(e) {
    console.log(e.target.value, "hello");
    const selectedNo = e.target.value;
    setNumber(selectedNo);
  }
  return (
    <>
      <h1>WEIGH BAGGAGE</h1>
      <h2>How many items do you have?</h2>
      <input
        className="bagNumber"
        type="number"
        min="1"
        max="10"
        step="1"
        onChange={handleNumber}
        onKeyDown={(event) => {
          event.preventDefault();
        }}
      ></input>
      <button onClick={handleconfirm}>Confirm</button>
    </>
  );
}

export default Baggage;
