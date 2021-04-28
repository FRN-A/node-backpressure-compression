//npm install node-fetch
const server = require("fastify")();
const fetch = require("node-fetch");
const https = require("https");
const fs = require("fs");

const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const TARGET = process.env.TARGET || "127.0.0.1:4000";
const FUENTE = process.env.FUENTE || "local";

server.get("/", async () => {
  const solicitud = await fetch(`http://${TARGET}/recetas/42`);
  const payload = await solicitud.json();

  return {
    pid: process.pid,
    fuente: FUENTE,
    data_servicio: payload,
  };
});

server.get("/health", async () => {
  console.log("health check");
  return "OK";
})

server.listen(PORT, HOST, () => {
  console.log(`Corriendo en http://${HOST}:${PORT}/`);
});
