import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Print() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  const [printing, setPrinting] = useState(true);
  const [currentbag, setCurrentBag] = useState(0);
  const total = Object.keys(data).length;

  useEffect(() => {
    for (let i = 0; i < Object.keys(data).length; i++) {
      setTimeout(() => {
        setCurrentBag(i + 1);
        if (i + 1 === total) {
          setTimeout(() => {
            setPrinting(false);
          }, 1000);
        }
      }, 1000 * i);
    }
  }, []);

  function complete() {
    navigate("/");
  }
  return (
    <>
      <div className="printingDiv">
        {printing ? (
          <h1>
            Printing {currentbag} of {total} Tags...
          </h1>
        ) : (
          <h1>All tags have been printed!</h1>
        )}

        {printing ? <div className="loader"></div> : null}

        <button onClick={complete}>Complete</button>
      </div>
    </>
  );
}

export default Print;
