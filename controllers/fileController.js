const fs = require("fs");
const PROJECTBASE = process.cwd() + '/';
const path = require("path");


const download = (req, res) => {  
  const fileName = req.params.name;    
  const id = req.params.id;
  const filePath =PROJECTBASE +'public/assets/img/'+ id + '/' + fileName;


  

  fs.readFile(filePath, function (err, content) {
    if (err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image");    
    } else {    
        res.writeHead(200,{'Content-type':'*/*'});        
        res.end(content);
    }
});

};

const sendImage = (req, res) => {
  const fileName = req.params.name;
  const id = req.params.id;
  const filePath = 'Files/' + id + '/' + fileName;

  res.sendFile(filePath,{ root: '.' }, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
    }
  });
};

module.exports = {
  download,
  sendImage
};