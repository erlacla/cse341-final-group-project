const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test Library GET requests', () => {
  test('responds to /library', async () => {
    const res = await request.get('/library');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /library/:libraryId', async () => {
    const res = await request.get('/library/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
