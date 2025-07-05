const { log } = require("console");
const fs = require("fs");
const PROJECTBASE = process.cwd() + '/';
const path = require("path");

const sendImage = (req, res) => {
  const fileName = req.params.name;
  const id = req.params.id;
  const filePath = 'Files/img/' + id + '/' + fileName;

  log(`Request to send file: ${filePath}`);

  res.sendFile(filePath,{ root: '.' }, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
    }
  });
};

module.exports = {
  sendImage
};