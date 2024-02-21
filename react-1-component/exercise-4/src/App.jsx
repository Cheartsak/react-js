import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <RunningForm />
      <TableDisplay />
    </div>
  );
}
const RunningForm = () => {
  return (
    <>
      <h1>Enter Data</h1>
      <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
        <br />
        <br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />
        <br />
        <br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" />
        <br />
        <br />

        <button type="button" onClick="addData()">
          Add Data
        </button>
      </form>
    </>
  );
};
const TableDisplay = () => {
  const data = [
    "Name",
    "Age",
    "Weight",
    "Current Running (Minutes)",
    "Good Running",
  ];
  return (
    <>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <tr>
          {data.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </table>
    </>
  );
};
export default App;
