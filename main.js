process.stdin.on("data", (chunk) => {
    const data = chunk.toString().trim().split("\n").map(item => Number(item));

    const counterNumber = (function () {
        let counter = 0;

        return {
            increment() {
                counter++;
            },

            value() {
                return counter
            }
        }
    })();

    for (let i = 0; i < data[0]; i++) {
        counterNumber.increment();
    }

    console.log(counterNumber.value())
})