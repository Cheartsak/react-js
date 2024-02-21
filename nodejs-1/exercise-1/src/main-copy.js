import express from "express";
const webServer = express();
const hostname = "127.0.0.1";
const port = 3001;

webServer.get("/", (request, response) => {
  response.send("This is a root route.");
});
webServer.get("/news", (request, response) => {
  const data = [
    { name: "news 1", detail: "detail 1" },
    { name: "news 2", detail: "detail 2" },
    { name: "news 3", detail: "detail 3" },
  ];
  response.send(data);
});
webServer.get("/users", (request, response) => {
  const data = [
    { userId: "mock-id-1" },
    { name: "mock-id-2" },
    { name: "mock-id-3" },
  ];
  response.send(data);
});
webServer.get("/me", (request, response) => {
  const data = {
    name: "mock-name",
    role: "user",
    picture: "-----",
  };
  response.send(data);
});
webServer.get("/health-check", (request, response) => {
  response.send("Server is fine!");
});

webServer.listen(port, hostname, () => {
  console.log(`Server is running on port:${port}`);
});
// http://127.0.0.1:3001
