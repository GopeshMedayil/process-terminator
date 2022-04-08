var child_process = window.require('child_process');
const pidFromPort = window.require('pid-from-port');
let pid;
const terminate = async (port) => {
    console.log("in terminate");
    try {
        pid = await pidFromPort(port);
    }
    catch (err) {
        console.log("no process running on port");
        return {
            code: 500,
            message: "No process running on port"
        }
    }
    child_process.exec(`taskkill /PID ${pid} /F`, (err, stdout, stderr) => {
        if (!stdout) {
            return {
                code: 500,
                message: "No process running on port"
            }
        }
        else {
            console.log(stdout);
            return {
                code: 200,
                message: `Process terminated for the pid ${pid}`
            }
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