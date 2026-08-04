process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim().split("\n").map(item => Number(item));

    function safeDivide(a, b) {
        try {
            if (b === 0) throw new Error("divide by zero");

            console.log(`RESULT ${Math.floor(a / b)}`);
        } catch(err) {
            console.log(`ERROR ${err.message}`)
        }
    }

    safeDivide(inputData[0], inputData[1])
})