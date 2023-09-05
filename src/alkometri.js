import React, { useState } from "react";

function BACCalculator() {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male"); // Default to "Male"
  const [bottles, setBottles] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateBAC = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    let bacResult;
    if (gender === "male") {
      bacResult = gramsLeft / (weight * 0.7);
    } else if (gender === "female") {
      bacResult = gramsLeft / (weight * 0.6);
    } else {
      setResult("Invalid gender input. Please select 'Male' or 'Female'.");
      return;
    }

    setResult(`Blood Alcohol Level: ${bacResult.toFixed(2)}`);
  };

  return (
    <div>
      <h2>Blood Alcohol Level Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
      <div>
        <label>Number of Beer Bottles Drunk:</label>
        <input
          type="number"
          value={bottles}
          onChange={(e) => setBottles(e.target.value)}
        />
      </div>
      <div>
        <label>Time Since Last Drink (hours):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Male
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
        </div>
      </div>
      <button onClick={calculateBAC}>Calculate</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default BACCalculator;
