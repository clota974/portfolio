import romanNumbers from "../locales/roman-numbers"; 

const {
  ones, tens, hundreds, thousandMarker 
} = romanNumbers;

const arrayOfLocales = [ones, tens, hundreds];

export function checkIfConvertible(input: number) {
  if (input <= 0) throw new Error(`Negative or null number (${input}) didn't exist in ancient times`)
  if (input % 1 !== 0) throw new Error(`Floating point numbers (${input}) didn't exist in ancient times`)
  if (input > 5000) throw new Error(`Number is too big to be converted to roman numeral`)
  return true;
}

export function digitToRoman(digit: number, powerOfTen: number = 0): string {
  if (powerOfTen > arrayOfLocales.length) throw new Error('This digit is not convertible')
  return arrayOfLocales[powerOfTen][digit];
}

export default function numberToRoman(input: number) {
  if(!checkIfConvertible(input)) return;

  const amountOfThousands = Math.floor(input / 1000); // For the thousand marker
  const thousandPrefix = Array(amountOfThousands).fill(thousandMarker).join('');
  
  const underThousands = input % 1000; // For the thousand marker
  const digitArray = underThousands
    .toString() // Converts to string
    .split('') // Creates array
    .map(x => parseInt(x)); // Converts each digit to number

  const romanNumber = digitArray
    .reverse() // to have index in correct power of ten
    .map(digitToRoman)
    .reverse() // Put back numbers in place
    .join('');

  return `${thousandPrefix}${romanNumber}`;
}