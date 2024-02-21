import { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  return (
    <>
      <h1>Exercise-2</h1>
      <input
        type="text"
        placeholder="name here"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="bio here"
        onChange={(e) => setBio(e.target.value)}
      />
      <Info name={name} bio={bio} />
    </>
  );
};
const Info = ({ name, bio }) => {
  return (
    <>
      <h1>Name : {name}</h1>
      <p>Bio : {bio}</p>
    </>
  );
};

export default App;
