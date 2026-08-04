process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim().split("\n").map(item => Number(item));

    class AgeError extends Error {
        constructor(age) {
            super(age);
            this.name = "AgeError";
        }
    }

    function validateAge(n) {
        try {
            if( n < 0 || n > 150 ) throw new AgeError(n);

            console.log(`OK ${n}`);
        } catch (err) {
            console.log(`ERROR ${err.message}`)
        }
    }

    validateAge(inputData[0])
})