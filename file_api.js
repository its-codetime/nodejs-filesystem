const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  // get all file names
  // send error if no file exist
  // else send list of all files
  const files_path = "files";

  try {
    const files = fs.readdirSync(files_path);
    if (files.length === 0) {
      res.json({
        error: "No files found",
      });
      return;
    }
    res.json({ files });
  } catch (err) {
    next(err);
  }
});

router.get("/file/:filename", (req, res) => {
  // get file contents
  // send error if file doesn't exist
  // send contents of file
  const { filename } = req.params;
  const file_path = `./files/${filename}`;
  try {
    const content = fs.readFileSync(file_path, "utf8");
    res.json({ content });
  } catch (err) {
    res.json({ error: `File ${filename} not found` });
  }
});

router.post("/create/:filename", (req, res, next) => {
  // error if file already exists
  // create new file
  const { filename } = req.params;
  const { content } = req.body;
  const file_path = `./files/${filename}`;
  try {
    if (fs.existsSync(file_path)) {
      res.json({
        error: `File ${filename} already exists`,
      });
      return;
    }
    if (content) fs.writeFileSync(file_path, content);
    res.json({
      message: `File ${filename} created`,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/rename/:filename", (req, res, next) => {
  // error if file doesn't exist
  // rename file
  const { filename } = req.params;
  const { new_filename } = req.body;
  const file_path = `./files/${filename}`;
  try {
    if (!fs.existsSync(file_path)) {
      res.json({
        error: `File ${filename} not found`,
      });
      return;
    }

    fs.renameSync(file_path, `./files/${new_filename}`);
    res.json({
      message: `File ${filename} renamed to ${new_filename}`,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/update/:filename", (req, res) => {
  // update file contents
  // error if file doesn't exist
  // append or replace content based on action which comes in body
  const { filename } = req.params;
  const { action, content } = req.body;
  const file_path = `./files/${filename}`;

  try {
    if (!fs.existsSync(file_path)) {
      res.json({
        error: `File ${filename} not found`,
      });
      return;
    }

    if (action === "append") {
      fs.appendFileSync(file_path, `\n${content}`);
    } else if (action === "replace") {
      fs.writeFileSync(file_path, content);
    }

    res.json({
      message: `File ${filename} updated`,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:filename", (req, res) => {
  // delete file
  // error if file doesn't exist
  const { filename } = req.params;
  try {
    fs.unlinkSync(`./files/${filename}`);
  } catch (err) {
    res.json({ error: `File ${filename} not found` });
    return;
  }

  res.json({
    message: `File ${filename} deleted`,
  });
});

module.exports = router;
