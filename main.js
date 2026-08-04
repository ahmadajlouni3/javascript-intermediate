process.stdin.on("data", chunk => {
    const inputData = chunk.toString().trim().split("\n").map(item => Number(item));

    async function sumNumbers () {
        const promises = [];

        for (let item of inputData) {
            promises.push(Promise.resolve(item));
        }

        const result = await Promise.all(promises);

        const sum = result.reduce((acc, item) => acc + item, 0);
        console.log(sum);
    }

    sumNumbers()

})