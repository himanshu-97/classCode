//Same as running commands in shell but execution of both files or working of both files takes place together.
let cp = require("child_process");
console.log(cp);

// cp.execSync("open -a Calculator"); // to open cal in mac

let content = cp.execSync("node test.js");
console.log("Output of test.js "+content); 
