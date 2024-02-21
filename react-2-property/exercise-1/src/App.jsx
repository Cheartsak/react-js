import "./App.css";

function App() {
  const members = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "Mean Mock",
      age: 55,
      weight: 64,
      running: 70,
      status: "Extreme",
    },
    {
      name: "Mock J",
      age: 2,
      weight: 8,
      running: 12,
      status: "Good",
    },
  ];
  const specialMember = [
    {
      name: "Jane Doe",
      age: 20,
      weight: 48,
      running: 100,
      status: "Excellent",
    },
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay data={members.concat(specialMember)} />
    </div>
  );
}

const RunningForm = () => {
  return (
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

      <button type="button">Add Data</button>
    </form>
  );
};

const TableDisplay = (props) => {
  const data = props.data;
  return (
    <>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Current Running (Minutes)</th>
            <th>Good Running</th>
          </tr>
        </thead>
        <TableBody data={data} />
      </table>
    </>
  );
};

const TableBody = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <tbody>
      {data.map((member) => {
        return (
          <tr>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.weight}</td>
            <td>{member.running}</td>
            <td>{member.status}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default App;
