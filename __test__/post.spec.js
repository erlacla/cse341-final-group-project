const postRoutes = require('../routes/post');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(postRoutes);

describe('Test library route', () => {
  test('responds to post /library', async () => {
    const res = await request.post('/library').send({
      firstName: 'Emily',
      lastName: 'Button',
      email: 'emilyButton@gmail.com',
      age: 25,
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
});
