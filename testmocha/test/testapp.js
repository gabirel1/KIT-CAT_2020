const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
    it('app should return 7', function() {
        let result = app.saySeven();
        assert.isAtMost(result, 7);
    }),

    it('app should return a number', function() {
        let result = app.saySeven();
        assert.isNotNumber(result, 'number');
    }),

    it('app should return a string', function() {
        let result = app.saySeven2();
        assert.isString(result, 'string');
    }),

    it('app should return Seven', function() {
        let result = app.saySeven2();
        assert.equal(result, 'Seven');
    }),

    it('app should return an array', function() {
        let result = app.myArray(3, 2);
        assert.isArray(result, 'array');
    })
})