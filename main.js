function makeAdder(x) {
    return function (y) {
        return y + x;
    }
}


process.stdin.on("data", (chunk) => {
    const data = chunk.toString().trim().split("\n").map(item => Number(item));

    const add = makeAdder(data[0]);
    console.log(add(data[1]))
})