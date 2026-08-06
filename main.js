process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim().split(/\s/g);

    const wordsCounter = {};

    // add count of words
    for( let word of inputData) {
        if(!wordsCounter[word]) {
            wordsCounter[word] = 0;
        }


        let item = wordsCounter[word];
        item++;
        wordsCounter[word] = item;
    }

    // sort Object and let it iterable
    const sortedWordsCounter = new Map(Object.entries(wordsCounter).sort());

    // print output
    for ( let [key, value] of sortedWordsCounter ) {
        console.log(`${key}: ${value}`);
    }
    
})