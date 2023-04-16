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
    const replacedValue = jnestedReplace(Object.assign({}, INPUT_JSON), 'json-nested-replace', 'jnested-replace');
    expect(replacedValue).to.deep.equal(REPLACED_JSON);
  });
  it('should replace all the occurences in object and array', () => {
    const replacedValue = jnestedReplace(Object.assign({}, ARRAY_JSON), 'json-nested', 'jnested');
    expect(replacedValue).to.deep.equal(REPLACE_ARRYA_JSON);
  });
  it('should throw error of empty input values', () => {
    try {
      jnestedReplace();
    } catch (err) {
      expect(err.message).to.equal('JSON, searchValue, newValue cannot be null');
    }
  });
  it('should throw error if input is not json', () => {
    try {
      jnestedReplace(INPUT_JSON.name, 'json-nested-replace', 'jnested-replace');
    } catch (err) {
      expect(err.message).to.equal('Invalid JSON');
    }
  });
  it('should skip keys while replacing', () => {
    const INPUT_JSON = {
      'name': 'json-nested-replace',
      'author': 'Arshad Kazmi',
      'repository': {
        'url': 'https://github.com/arshadkazmi42/json-nested-replace',
        'language': 'js'
      }
    };
    const replacedValue = jnestedReplace(Object.assign({}, INPUT_JSON), 'json-nested-replace', 'jnested-replace', ['url']);
    expect(replacedValue.repository.url).to.equal(INPUT_JSON.repository.url);
    expect(replacedValue.name).to.be.equal('jnested-replace');
  });
  it('show skip the values which are not string', () => {
    const input = {
      'name': 'json-nested-replace',
      'author': 'Arshad Kazmi',
      'number': 1234,
      'boolean': true,
      'repository': {
        'url': 'https://github.com/arshadkazmi42/json-nested-replace',
        'language': 'js',
        'numberString': '1234',
        'booleanString': 'true'
      }
    };

    const expected = {
      'name': 'json-nested-replace',
      'author': 'Arshad Kazmi',
      'number': 1234,
      'boolean': true,
      'repository': {
        'url': 'https://github.com/arshadkazmi42/json-nested-replace',
        'language': 'js',
        'numberString': '4321',
        'booleanString': 'true'
      }
    };

    const updatedInput = jnestedReplace(input, '1234', '4321');
    expect(updatedInput).to.be.deep.equals(expected);
  });
});
