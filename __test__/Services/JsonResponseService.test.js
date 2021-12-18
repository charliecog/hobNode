const JsonResponse = require('../../Services/JsonResponseService');

describe('Json Response', () => {
    test('it should exist', () => {
        expect(JsonResponse()).toBeDefined();
    })

    test('it should be a function', () => {
        expect(typeof JsonResponse).toBe('function');
    })

    test('return value should be a object', () => {
        expect(typeof JsonResponse()).toBe('object');
    })

    test('return value success property should be a boolean - true', () => {
        let response = JsonResponse([], true);
        expect(typeof response.success).toBe('boolean');
        expect(response).toHaveProperty('success', true);
    })

    test('return value success property should be a boolean - false', () => {
        let response = JsonResponse();
        expect(typeof response.success).toBe('boolean');
        expect(response).toHaveProperty('success', false);
    })

    test('return value message property should be a string - default', () => {
        let response = JsonResponse();
        expect(typeof response.message).toBe('string');
        expect(response).toHaveProperty('message', 'something went wrong');
    })

    test('return value message property should be a string - text', () => {
        let response = JsonResponse([], true, 'hello');
        expect(typeof response.message).toBe('string');
        expect(response).toHaveProperty('message', 'hello');
    })

    test('return value status property should be a number', () => {
        let response = JsonResponse();
        expect(typeof response.status).toBe('number');
        expect(response).toHaveProperty('status', 200);
    })

    test('return value data property should be an array', () => {
        let response = JsonResponse();
        expect(Array.isArray(response.data)).toBe(true);
        expect(response).toHaveProperty('data', []);
    })

})
