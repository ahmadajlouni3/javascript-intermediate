function makeCounter() {
    // Use a let binding inside this function and return a function
    let count = 0;
    // that increments and returns it.

    return function () {
        count++;
        return count
    }
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
const counter = makeCounter();
for (let i = 0; i < n; i++) console.log(counter());
