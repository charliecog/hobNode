const createJsonResponse = require('../../Services/JsonResponseService');

describe('Successful Json Response', () => {
    test('it should exist', () => {
        expect(createJsonResponse.successful()).toBeDefined();
    })

    test('it should be a function', () => {
        expect(typeof createJsonResponse.successful).toBe('function');
    })

})