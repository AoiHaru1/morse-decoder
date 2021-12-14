const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const start = expr.split("");
  const letters = [];
  for (let i = 0; i < start.length; i += 10) {
    letters.push(start.slice(i, i + 10));
  }
  const transform = letters.map(x => x.join("").match(/(11|10)/gm)).map(x => x === null ? " " : x.map(y => +y === 10 ? "." : "-"));
  let ans = '';
  transform.map(x => x === " " ? (ans += " ") : (ans += MORSE_TABLE[x.join("")]));
  return ans
}

module.exports = {
  decode
}