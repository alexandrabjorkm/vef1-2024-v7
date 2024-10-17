/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const words = str.split(' ');
    const longestWord = words.reduce((longest, current) => {
      
    return current.length > longest.length ? current : longest;
    }, words[0]);
    return longestWord;
  }
  return null;
}
console.assert(longest('halló alexandra!') === 'alexandra!', 'longest: lengsta orðið');
console.assert(longest('halló') === 'halló', 'longest: eitt orð');
console.assert(longest('') === '', 'longest: tómi strengur');
console.assert(longest(false) === null, 'longest: ekki strengur, skilar null');

function shortest(str) {
  if (isString(str)) {
    const words = str.split(' ');
    const shortestWord = words.reduce((shortest, current) => {

    return current.length < shortest.length ? current : shortest;
    }, words[0]);
    return shortestWord;
  }
  return null;
}
console.assert(shortest('halló alexandra!') === 'halló', 'shortest: stysta orðið');
console.assert(shortest('halló') === 'halló', 'shortest: eitt orð');
console.assert(shortest('') === '', 'shortest: tómi strengur');
console.assert(shortest(false) === null, 'shortest: ekki strengur, skilar null');


function reverse(str) {
 if (isString(str)){
  const split = str.split('');
  const reversed = split.reverse();

  return reversed.join('');
 }
 return null;
}
console.assert(reverse('hæ') === 'æh', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ekki strengur, skilar null');

function palindrome(str) {
  if (isString(str) && str !== '') {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase()
  }

  return false; 
}
console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki')
console.assert(palindrome('hah') === true, 'palindrome: strengur, er')
console.assert(palindrome('') === false, 'palindrome: tómi strengur, ekki')

function vowels(str) {
 if (isString(str)) {
  const characters = str.toLowerCase().split('');
  const vowelCount = characters.filter(char => VOWELS.includes(char)).length;

  return vowelCount;
}
return 0;
}
console.assert(vowels('halló alexandra!') === 6, 'vowels: fjöldi sérhljóða');
console.assert(vowels('xyz') === 0, 'vowels: engin sérhljóða');
console.assert(vowels('') === 0, 'vowels: tómi strengur, skilar 0');
console.assert(vowels(false) === 0, 'vowels: ef ekki strengur, skilar 0');

function consonants(str) {
  if (isString(str)) {
    const characters = str.toLowerCase().split('');
    const consonantCount = characters.filter(char => CONSONANTS.includes(char)).length;

    return consonantCount;
  }
  return 0;
}
console.assert(consonants('halló alexandra!') === 8, 'consonants: fjöldi samhljóða');
console.assert(consonants('aáe') === 0, 'consonants: engir samhljóðar');
console.assert(consonants('') === 0, 'consonants: tómi strengur, skilar 0');
console.assert(consonants(false) === 0, 'consonants: ekki strengur, skilar 0');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Leiðbeiningar: Þú slærð inn streng og forritið skilar lengsta eða stysta orði, snýr strengnum við,' +
        'telur sérhljóða, samhljóða og athugar hvort strengurinn sé palindrome.');
  
  while (true) {
    const input = prompt('Sláðu inn streng:');
  
    if (input === null || input === '') {
      return;
    }
    const longestWord = longest(input);
    const shortestWord = shortest(input);
    const reversedStr = reverse(input);
    const vowelCount = vowels(input);
    const consonantCount = consonants(input);
    const isPalindrome = palindrome(input);
  
    let resultMessage = `Niðurstöður fyrir strenginn þinn "${input}":\n`;
    resultMessage += `Lengsta orðið: ${longestWord}\n`;
    resultMessage += `Stysta orðið: ${shortestWord}\n`;
    resultMessage += `Snúinn við: ${reversedStr}\n`;
    resultMessage += `Fjöldi sérhljóða: ${vowelCount}\n`;
    resultMessage += `Fjöldi samhljóða: ${consonantCount}\n`;
    resultMessage += `Er hann palindrome? ${isPalindrome ? 'Já' : 'Nei'}`;

    alert(resultMessage);

    const tryAgain = confirm('Viltu prófa aftur?');
    if (!tryAgain) {
      break;
    }
  }
}
