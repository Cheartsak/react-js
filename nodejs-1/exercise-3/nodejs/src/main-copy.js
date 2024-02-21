import express from "express";
const webServer = express();
const hostname = "127.0.0.1";
const port = 3001;

const data = [
  {
    companyId: "comp-01",
    name: "Mock Company 01",
    taxId: "tax-000",
    employees: [],
  },
];

webServer.use(express.json());
webServer.get("/", (request, response) => {
  response.send("Hello World");
});
webServer.get("/company", (request, response) => {
  response.json(data);
});
webServer.post("/company", (request, response) => {
  // console.log(request.body);
  const { name, taxId } = request.body;
  const companyId = `comp-${data.length + 1}`;
  const employees = [];
  data.push({ companyId, name, taxId, employees });
  response.send("Create Company Success");
});

webServer.listen(port, hostname, () => {
  console.log(`Server is running on port:${port}`);
});
// http://127.0.0.1:3001
