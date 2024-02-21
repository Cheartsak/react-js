import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const people = [
    { name: "John", organization: "ABC Inc.", position: "Developer" },
    { name: "Jane", organization: "XYZ Corp.", position: "Developer" },
    { name: "Bob", organization: "123 LLC", position: "Developer" },
  ];
  // Case 1 : peopleData= [] and you need to get data from external, so you ned to use useEffect()
  const [peopleData, setPeopleData] = useState([]);
  const [name, setName] = useState();
  const [organization, setOrganization] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    setPeopleData(people);
  }, []);

  return (
    <div className="App">
      {" "}
      {/* Add class name */}
      <h1>Table Example</h1>
      <div>
        <input
          type="text"
          placeholder="Type new name here"
          style={{ margin: "4px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type new organization here"
          style={{ margin: "4px" }}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type new position here"
          style={{ margin: "4px" }}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button
          style={{ margin: "4px" }}
          onClick={() =>
            setPeopleData((prev) => [...prev, { name, organization, position }])
          }
        >
          Save
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        {peopleData.map((person) => {
          const { name, organization, position } = person;
          return (
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{organization}</td>
                <td>{position}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
