



var fs = require('fs');
var test = process.argv[2];
 
fs.readFile(test,'utf8',  function (err,data) {

    if (err) {
        throw err;
    }
    
    const linbr = data.toString().split('\n').length - 1;
    processFile(linbr);   // Or put the next step in a function and invoke it
});

    
    function processFile(linbr) {
     console.log(linbr);
}