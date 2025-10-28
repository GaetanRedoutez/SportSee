/**
 * Formats a number with commas as thousands separators.
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber = (number) => {
  return number.toLocaleString("en-US");
};
