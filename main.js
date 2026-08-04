process.stdin.on("data", chunk => {
    // reading name from standard input/output
    const inputData = chunk.toString().trim();

    // class person 
    // + name
    // + greet()

    class Person {
        constructor(name) { 
            this.name = name;
        }

        greet() {
            console.log(`Hi, I am ${this.name}`);
        }
    }

    // class student
    // + study()

    class Student extends Person {
        study() {
            console.log(`${this.name} studies`)
        }
    }


    const student1 = new Student(inputData);

    student1.greet()
    student1.study()

})