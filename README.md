# json-nested-replace

[![Build Status](https://travis-ci.com/arshadkazmi42/json-nested-replace.svg?branch=master)](https://travis-ci.com/arshadkazmi42/json-nested-replace)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/json-nested-replace.svg)](https://github.com/arshadkazmi42/json-nested-replace/commits/master)

Searches and replace values at every level of nested json

> Give us a :star: if you like our work :heart:

<a href="https://www.buymeacoffee.com/arshadkazmi42" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work

## Install

```
$ npm install json-nested-replace
```
## NPM Version Badge
[![NPM Version](https://img.shields.io/npm/v/json-nested-replace.svg)](https://www.npmjs.com/package/json-nested-replace)

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

const replacedJSONValue = jnestedReplace(INPUT_JSON, 'json-nested-replace', 'jnested-replace');
console.log(replacedJSONValue);
// Output
/** {
 *   'name': 'jnested-replace',
 *   'author': 'Arshad Kazmi',
 *   'repository': {
 *     'url': 'https://github.com/arshadkazmi42/jnested-replace',
 *     'language': 'js'
 *   }
 * }
 **/


const replacedStringValue = jnestedReplace('json-nested-replace', 'json-nested', 'jnested');
console.log(replacedStringValue)
// Output
// jnested-replace

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/json-nested-replace/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
