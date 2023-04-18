// Require http module (use 'require()' as specified in reference doc)
const http = require('http');

// Require fs module
// Same structure as above
const fs = require('fs');

// Require minimist module (make sure you install this one via npm -> Following was installed on Powershell).
// Should also be the same structure as above.
const minimist = require('minimist');

// Use minimist (const from above) to process one argument `--port=` on the command line after `node server.js`.
// Specify the number '2' since the '--port=' argument comes after 'node server.js'.
const arg1 = minimist(process.argv.slice(2)); 

// Define a const `port` using the argument from the command line. 
arg1["port"]
const port = arg1.port || process.env.PORT || 3000; 

// Make this const default to port 3000 if there is no argument given for `--port`.
// Can you do an "if statement here"?
//if (port == null){ // port would be null if there's no argument given for `--port` (Would this work? -> NO (Debugging))
    //port = 3000;
//}

// Use the fs module to create an arrow function using `fs.readFile` (reference documentation for this).
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.

fs.readFile("./public/index.html", "utf8", (err, data) => { // Use the link specified above to read in the file
    if (err){
        console.error(err);
        return; // Documentation says to not return anything
        // Do I next to exit or return anything here? -> Not required
        process.exit(1); 
    }
    //console.log(data); Not needed

// If there is an error, put it on the console error and return (if err() from above). 
// Do not be nice about exiting.


// Define a const `server` as an arrow function using http.createServer (reference documentation stated below). 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.

// const http = require('http'); Needed?
const server = http.createServer((req, res) => {
    // set status code to 200
    res.statusCode = 200;
    // set a header with 'text/html' content type
    res.setHeader('Content-Type', 'text/html');
    // end with the data that you're reading in 
    res.end(data);
}) 

// Start the `server` const listening on the port defined by argument in your `port` const (use '.listen()' below). 
// Put the exact message `Server listening on port ${port}` on the console log. 
server.listen(port, () => {
    // Debugging: '${port}' was copied onto the following line improperly
    console.log(`Server listening on port ${port}`); // Was this message copied properly? -> Dynamically change based on input 
})

}); // Put the following at the end of the file! -> Debugging
// That's it! You're all done! (Do some debugging before committing -> DONE)