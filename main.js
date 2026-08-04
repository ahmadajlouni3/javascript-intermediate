process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim();

    // build object that have stdin name
    const user = {
        name: inputData
    }

    // function greet print this.name
    function greet() {
        console.log(`Hi, ${this.name}`)
    }

    // using bind
    // const greetUser = greet.bind(user);
    // greetUser();

    // using call
    greet.call(user);

    

})