const expect = require('chai').expect;

const jnestedReplace = require('../index');

const INPUT_JSON = {
  'name': 'json-nested-replace',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/json-nested-replace',
    'language': 'js'
  }
};

const REPLACED_JSON = {
  'name': 'jnested-replace',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/jnested-replace',
    'language': 'js'
  }
};

const ARRAY_JSON = {
  'name': 'json-nested-replace',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/jnested-replace',
    'language': 'js'
  },
  'keywords': [
    'json-nested',
    'json-nested-replace',
    'json'
  ],
  'related': [
    {
      'name': 'jmon'
    },
    {
      'name': 'json-nested-find-and-replace'
    }
  ]
};

const REPLACE_ARRYA_JSON = {
  'name': 'jnested-replace',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/jnested-replace',
    'language': 'js'
  },
  'keywords': [
    'jnested',
    'jnested-replace',
    'json'
  ],
  'related': [
    {
      'name': 'jmon'
    },
    {
      'name': 'jnested-find-and-replace'
    }
  ]
};


describe('replace in nested json', () => {
  it('should replace all the occurences in object', () => {
    const replacedValue = jnestedReplace(INPUT_JSON, 'json-nested-replace', 'jnested-replace')
    expect(replacedValue).to.deep.equal(REPLACED_JSON)
  });
  it('should replace all the occurences in string', () => {
    const replacedValue = jnestedReplace(INPUT_JSON.name, 'json-nested-replace', 'jnested-replace')
    expect(replacedValue).to.deep.equal(REPLACED_JSON.name)
  });
  it('should replace all the occurences in object and array', () => {
    const replacedValue = jnestedReplace(ARRAY_JSON, 'json-nested', 'jnested')
    expect(replacedValue).to.deep.equal(REPLACE_ARRYA_JSON)
  });
  it('should throw error of empty input values', () => {
    try {
      jnestedReplace()
    } catch (err) {
      expect(err).to.equal('JSON, searchValue, newValue cannot be null');
    }
  });
});
