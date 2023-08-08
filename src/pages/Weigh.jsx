import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Weigh() {
  const location = useLocation();
  const [numberofBags, setnumberofBags] = useState(location.state.number);
  const navigate = useNavigate();
  const bagNumber = useParams().bagnumber;
  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState("-");
  const [type, setType] = useState("-");
  const [weighed, setWeighed] = useState(false);
  const [bagdata, setBagData] = useState([]);

  useEffect(() => {
    setLoading(false);
    setWeight("-");
    setType("-");
    setWeighed(false);
  }, [bagNumber]);

  useEffect(() => {
    const data = { type: type, weight: weight };
    setBagData((prevBagData) => ({
      ...prevBagData,
      [bagNumber]: { ...data },
    }));
  }, [weight, type]);

  function handleWeigh() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const random = generateRandomNumber();
      setWeight(random);
      setType("Regular");
      setWeighed(true);
    }, 1000);
  }

  function generateRandomNumber() {
    const randomNumber = Math.random();

    const generatedNumber = 3.0 + randomNumber * (32.0 - 3.0);

    return generatedNumber.toFixed(1);
  }
  function handleNext() {
    if (bagNumber === numberofBags) {
      console.log(bagdata, "final check");
      console.log("time to print tags!");
      navigate("/bagtag", {
        state: { data: bagdata },
      });
    } else {
      const nextBagNumber = parseInt(bagNumber) + 1;

      navigate(`/bag/${nextBagNumber}`, {
        state: { number: bagNumber },
      });
    }
  }

  return (
    <>
      <div className="weighingDetails">
        <h1>Bag {bagNumber} </h1>
        <h2>Type: {type}</h2>
        <h2>Weight: {weight} </h2>
        {loading ? <div className="loader"></div> : null}

        {weighed ? null : <button onClick={handleWeigh}>Weigh</button>}
        {weighed ? <button onClick={handleNext}>Next</button> : null}
      </div>
    </>
  );
}

export default Weigh;
