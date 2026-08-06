process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim();

    const result = inputData.match(/[0-9]/g);
    // const num = result.reduce((acc, item) => acc++, 0);
    console.log(result ? result.length : 0);
    
})