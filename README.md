# json-nested-replace

[![NPM Version](https://img.shields.io/npm/v/json-nested-replace.svg)](https://www.npmjs.com/package/json-nested-replace)
[![Build Status](https://travis-ci.com/arshadkazmi42/json-nested-replace.svg?branch=master)](https://travis-ci.com/arshadkazmi42/json-nested-replace)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace/commits/master)

Searches and replace values at every level of nested json

> Give us a :star: if you like our work :heart:

Please consider donating, if you like my work

## Install

```
$ npm install json-nested-replace
```

## Usage

```javascript
const jnestedReplace = require('json-nested-replace');

const INPUT_JSON = {
  'name': 'json-nested-replace',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/json-nested-replace',
    'language': 'js'
  }
};

const replacedJSONValue = jnestedReplace(INPUT_JSON, 'json-nested-replace', 'jnested-replace', ['url']);
console.log(replacedJSONValue);
// Output
/** {
 *   'name': 'jnested-replace',
 *   'author': 'Arshad Kazmi',
 *   'repository': {
 *     'url': 'https://github.com/arshadkazmi42/json-nested-replace',
 *     'language': 'js'
 *   }
 * }
 **/

```

## Function Parameters

Function `jnestedReplace` takes following parameters respectively

- `input`: Object/Array on which nested replace to apply
- `searchValue`: Value which needs to be replaced in the JSON
- `newValue`: New Value which needs to be added in place of searchValue
- `skipKeys`: Optinal field, if any key needs to be skipped from this replacing

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/json-nested-replace/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/ayanujju"><img src="https://github.com/ayanujju.png" width="30" /></a>
