/**
 * Iterates through the whole json and replaces searchValue with newValue
 * Works on simple string, json, array
 * @param {JSON/Array/String} input 
 * @param {String} searchValue 
 * @param {String} newValue 
 */
const jnestedReplace = (input, searchValue, newValue, skipKeys=[]) => {

  // Validate for input, searchValue and newValue
  // throws error if any value is undefined/null
  if (!input || !searchValue || !newValue) {
    throw new Error('JSON, searchValue, newValue cannot be null');
  }

  // If input is not json
  if (!isObject(input) && !isArray(input)) {
    throw new Error('Invalid JSON');
  }

  // Iterate over the object and find and replace values
  for (let key in input) {

    // If type is object, call the same function recursively
    if (isObject(input[key])) {
      input[key] = jnestedReplace(input[key], searchValue, newValue, skipKeys);
      continue;
    }

    // If type is array, call the same function recursively 
    // for every element of array
    if (isArray(input[key])) {
      for (let i=0; i<input[key].length; i++) {
        input[key][i] = jnestedReplace(input, searchValue, newValue, skipKeys);
      }
      continue;
    }

    // If the key needs to be skipped.
    // Do not process and continue to next element
    if (skipKeys.indexOf(key) === -1) {
      input[key] = input[key].replace(searchValue, newValue);
    }
  }

  return input;
};


// Checks if data is an object
const isObject = (data) => {
  return data instanceof Object;
};

// checks if data is an array
const isArray = (data) => {
  return data instanceof Array;
};


module.exports = jnestedReplace;
