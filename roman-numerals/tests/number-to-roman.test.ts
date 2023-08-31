import numberToRoman, {checkIfConvertible, digitToRoman} from "src/lib/utils/number-to-roman";

describe('Number to roman', () => {
  it('should throw for floating points numbers', () => {
    expect(() => checkIfConvertible(0.4)).toThrow();
  })

  it('should throw for null or negative values', () => {
    expect(() => checkIfConvertible(0)).toThrow();
    expect(() => checkIfConvertible(-4)).toThrow();
  })

  it('should transform powers of tens to roman numbers', () => {
    expect(digitToRoman(5, 0)).toBe('V');
    expect(digitToRoman(2, 1)).toBe('XX');
    expect(digitToRoman(1, 2)).toBe('C');
  })

  it('should transform 1000 to MMMM', () => {
    expect(numberToRoman(1000)).toBe('M');
    expect(numberToRoman(4000)).toBe('MMMM');
  })

  it('should transform 2017 to MMMM', () => {
    expect(numberToRoman(123)).toBe('CXXIII');
    expect(numberToRoman(2017)).toBe('MMXVII');
  })
})