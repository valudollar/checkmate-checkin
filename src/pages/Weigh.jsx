import { useState } from "react";
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

  function handleWeigh() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWeight(generateRandomNumber());
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
    // console.log(bagNumber, "hello2");
    // setBagDetails((prevDetails) => ({
    //   ...prevDetails,
    //   [`Bag ${bagNumber}`]: { ...bagDetails },
    // }));

    if (bagNumber === numberofBags) {
      // navigate("/bagtag", { bagDetails });
      console.log("time to print tags!");
      navigate("/bagtag");
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
