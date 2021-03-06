const createJsonResponse = require('../../Services/JsonResponseService');

describe('Successful Json Response', () => {
    test('it should exist', () => {
        expect(createJsonResponse.successful()).toBeDefined();
    })

    test('it should be a function', () => {
        expect(typeof createJsonResponse.successful).toBe('function');
    })

    test('return value should be a object', () => {
        expect(typeof createJsonResponse.successful()).toBe('object');
    })

    test('return value success property should be a boolean', () => {
        let response = createJsonResponse.successful();
        expect(typeof response.success).toBe('boolean');
        expect(response).toHaveProperty('success', true);
    })

    test('return value message property should be a string', () => {
        let response = createJsonResponse.successful();
        expect(typeof response.message).toBe('string');
        expect(response).toHaveProperty('message', '');
    })

    test('return value status property should be a number', () => {
        let response = createJsonResponse.successful();
        expect(typeof response.status).toBe('number');
        expect(response).toHaveProperty('status', 200);
    })

    test('return value data property should be an array', () => {
        let response = createJsonResponse.successful();
        expect(Array.isArray(response.data)).toBe(true);
        expect(response).toHaveProperty('data', []);
    })

})

describe('Unsuccessful Json Response', () => {
    test('it should exist', () => {
        expect(createJsonResponse.unsuccessful()).toBeDefined();
    })

    test('it should be a function', () => {
        expect(typeof createJsonResponse.unsuccessful).toBe('function');
    })

    test('return value should be a object', () => {
        expect(typeof createJsonResponse.unsuccessful()).toBe('object');
    })

    test('return value success property should be a boolean', () => {
        let response = createJsonResponse.unsuccessful();
        expect(typeof response.success).toBe('boolean');
        expect(response).toHaveProperty('success', false);
    })

    test('return value message property should be a string', () => {
        let response = createJsonResponse.unsuccessful();
        expect(typeof response.message).toBe('string');
        expect(response).toHaveProperty('message', '');
    })

    test('return value status property should be a number', () => {
        let response = createJsonResponse.unsuccessful();
        expect(typeof response.status).toBe('number');
        expect(response).toHaveProperty('status', 404);
    })

    test('return value data property should be an array', () => {
        let response = createJsonResponse.unsuccessful();
        expect(Array.isArray(response.data)).toBe(true);
        expect(response).toHaveProperty('data', []);
    })

})