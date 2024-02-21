import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [image, setImage] = useState();
  const [choice, setChoice] = useState();
  const [info, setInfo] = useState();
  useEffect(() => {
    if (choice === "name") {
      setInfo(<h1>{name}</h1>);
    } else if (choice === "age") {
      setInfo(<h1>{age}</h1>);
    } else if (choice === "image") {
      setInfo(<img src={image} alt="image" />);
    } else {
      setInfo(<p>specify an option</p>);
    }
  }, [choice]);

  return (
    <>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="image url"
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={() => setChoice("name")}>Name</button>
      <button onClick={() => setChoice("age")}>Age</button>
      <button onClick={() => setChoice("image")}>Image</button>
      {console.log("info : ", info)}
      {info}
      {/* {console.log("choice : ", choice)}
      {choice === "name" ? (
        <h1>{name}</h1>
      ) : choice === "age" ? (
        <h1>{age}</h1>
      ) : choice === "image" ? (
        <img src={image} alt="image" />
      ) : (
        <p>Specify an option</p>
      )} */}
    </>
  );
};
export default App;
