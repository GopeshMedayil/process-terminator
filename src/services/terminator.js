var child_process = window.require('child_process');
const pidFromPort = window.require('pid-from-port');
let pid;
const terminate = async (port, callback) => {
    console.log("in terminate");
    try {
        pid = await pidFromPort(Number(port));
    }
    catch (err) {
        //console.log("no process running on port");
        let result = {
            code: 500,
            message: `No process running on port ${port}`
        }
        callback(result);
    }
    child_process.exec(`taskkill /PID ${pid} /F`, (err, stdout, stderr) => {
        if (!stdout) {
            let result = {
                code: 500,
                message: `No process running on port ${port}`
            }
            callback(result);

        }
        else {
            console.log(stdout);
            let result = {
                code: 200,
                message: `Process terminated for the pid ${pid}`
            }
            callback(result);

        }
    })

};

export default terminate;