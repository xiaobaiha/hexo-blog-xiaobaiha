let childProcess = require('child_process');

childProcess.exec(`http-server ./index/index/ -p 10000`, (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        reject(err);
    }
    console.log(stdout);
    console.error(stderr);
    resolve(`${stdout} \n ${stderr} \n`);
});