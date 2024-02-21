import React, { useState } from "react";

function App() {
  // adding state here.
  const [choice, setChoice] = useState();
  const handleClick = (value) => {
    setChoice(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo choice={choice} />
    </div>
  );
}

function DisplayInfo({ choice }) {
  // let info;
  // if (choice === "Fullname") {
  //   info = <h2>John Doe</h2>;
  // } else if (choice === "Age") {
  //   info = <h2>30</h2>;
  // } else if (choice === "Picture") {
  //   info = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  // } else {
  //   info = <p>Please select an option.</p>;
  // }
  // return <div>{info}</div>;

  return (
    <div>
      {choice === "Fullname" ? (
        <h2>John Doe</h2>
      ) : choice === "Age" ? (
        <h2>30</h2>
      ) : choice === "Picture" ? (
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      ) : (
        <p>Please select an option.</p>
      )}
    </div>
  );
}

export default App;
