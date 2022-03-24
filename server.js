const express = require("express");
const volleyball = require("volleyball");
const { NotFoundHandler, ErrorHandler } = require("./error_handlers");
const file_api = require("./file_api");

const app = express();

// http request response logger
app.use(volleyball);

// body parser
app.use(express.json());

// root
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the file api server📚📂📝✅",
    endpoints: [
      "/files - list all files",
      "/files/file/filename - list file contents",
      "/files/create/filename - create new file",
      "/files/rename/filename - rename file",
      "/files/update/filename - update file contents",
      "/files/delete/filename - delete file",
    ],
  });
});

// filesystem api route
app.use("/files", file_api);

// error handlers
app.use(NotFoundHandler);
app.use(ErrorHandler);

module.exports = app;
