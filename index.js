const app = require("./server");
const PORT = process.env.PORT || 2999;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
