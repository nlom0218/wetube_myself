import app from "./app.js";

const PORT = 3000;
const handleListening = function () {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
