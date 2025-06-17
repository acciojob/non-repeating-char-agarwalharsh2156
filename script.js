function firstNonRepeatedChar(str) {
  const freq = {};

  // First pass: count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Second pass: find the first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
