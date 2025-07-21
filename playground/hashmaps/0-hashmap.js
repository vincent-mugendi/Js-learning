let letters = {};

let message = "wrytrthzsafdadfadgaewtwszssgres"

for (let i = 0; i < message.length; i++) {

    let char = message[i];
    if (letters[char]) {
        letters[char]++;
    } else {
        letters[char] = 1;
    }
}

console.log(letters);