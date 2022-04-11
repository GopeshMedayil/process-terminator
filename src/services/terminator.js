var child_process = window.require('child_process');
const pidFromPort = window.require('pid-from-port');
let pid;
const terminate = async (port, callback) => {
    console.log("in terminate");
    try {
        pid = await pidFromPort(Number(port));
    }
    catch (err) {
        console.log("no process running on port");
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
    // child_process.exec(`netstat -ano | findstr :${port}`, (err, stdout, stderr) => {
    //     if (err ) {
    //         //throw err;
    //         console.log('stderr', err)
    //         console.log("No running port")
    //     }

    //     //console.log('stdout', stdout);
    //     const res = stdout.split(`\n`).map(s => s.trim());
    //     const pid = res.map(s => s.split(` `).pop()).filter(s => s).pop();

    //     console.log(pid);

    // });
};

export default terminate;