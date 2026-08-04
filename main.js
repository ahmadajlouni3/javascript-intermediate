process.stdin.on("data", chunk => {
    const inputData = chunk.toString().trim().split("\n").map(item => Number(item));

    const promise1 = new Promise((resolve, reject) => {
        resolve(inputData[0]);
    })

    const promise2 = new Promise((resolve, reject) => {
        resolve(inputData[1]);
    });


    async function main() {
        const gatherNumbers = await Promise.all([promise1, promise2]);
        const sum = gatherNumbers.reduce((acc, item) => acc + item, 0);
        console.log(sum);
    }
    main()
})