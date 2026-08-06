process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim().split("\n").map(item => Number(item));

    

    function* fib(n) {

        let startNum = 0;
        let lastNum = 1;
        let nextNum = 0;

        for (let i = 0; i < n; i++) {
            yield startNum;

            nextNum = startNum + lastNum;
            startNum = lastNum;
            lastNum = nextNum;
        }
        
    }

    const generator = fib(inputData[0]);
    for (let i = 0; i < inputData[0]; i++) {
        console.log(generator.next().value)
    }
    
})