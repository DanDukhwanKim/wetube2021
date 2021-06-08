import express from "express";

const PORT = 3000;

const app = express();

const handleListening = () =>
  console.log(`Server listening on http://localhost: ${PORT}🩸`);

app.listen(4000, handleListening);
