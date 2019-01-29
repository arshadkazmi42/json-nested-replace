/**
 * Iterates through the whole json and replaces searchValue with newValue
 * Works on simple string, json, array
 * @param {JSON/Array/String} input 
 * @param {String} searchValue 
 * @param {String} newValue 
 */
const jnestedReplace = (input, searchValue, newValue) => {

  // Validate for input, searchValue and newValue
  // throws error if any value is undefined/null
  if (!input || !searchValue || !newValue) {
    throw 'JSON, searchValue, newValue cannot be null';
  }

  // Iterate over the object and find and replace values
  for (let key in input) {

    // If type is object, call the same function recursively
    if (typeof input[key] === 'object') {
      input[key] = jnestedReplace(input[key], searchValue, newValue);
      continue;
    }

    // If type is array, call the same function recursively 
    // for every element of array
    if (typeof input[key] === 'array') {
      for (let i=0; i<input[key].length; i++) {
        input[key][i] = jnestedReplace(input, searchValue, newValue);
      }
      continue;
    }

    // Find and replace the value
    input[key] = input[key].replace(searchValue, newValue);
  }

  return input;
}


module.exports = jnestedReplace;
