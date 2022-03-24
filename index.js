const app = require("./server");
const PORT = process.env.PORT || 2999;
const fs = require("fs");

// create 'files' folder if it doesn't exist
if (!fs.existsSync("files")) fs.mkdirSync("files");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
