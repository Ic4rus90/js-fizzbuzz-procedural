const answer = []

// Write your code below this line

/*
Inside the `src/fizzbuzz.js` file, write a program that populates the `answer` array with numbers from 1 to 15, *except*:

- When the number is a multiple of three (e.g. 3, 6, 9, etc.), the number should be replaced with the word `Fizz`

- When the number is a multiple of five (e.g. 5, 10, etc.), the number should be replaced with the word `Buzz`

- When the number is a multiple of both three *and* five (e.g. 15), the number should be replaced with the word `FizzBuzz`
*/

for (let i = 0; i < 15; i++) {
    let insert = ''
    let number = i + 1
    if (number % 3 === 0) {
        insert = insert.concat('Fizz')
        if (number % 5 === 0) {
            insert = insert.concat('Buzz')
        }
        answer[i] = insert
        continue
    }

    else if (number % 5 === 0) {
        insert = insert.concat('Buzz')
        answer[i] = insert
        continue
    }

    else {
        answer[i] = number
    }
    
}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
