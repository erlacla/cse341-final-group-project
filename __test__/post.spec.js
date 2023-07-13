const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test Library POST requests', () => {
  test('responds to post /routes/library', async () => {
    const res = await request.post('/routes/library').send({
      name: 'Emily',
      email: 'emilyButton@gmail.com',
      address: 'address',
      phone: 'phone',
      hours: 'hours',
      schedule: 'schedule',
      links: 'links',
      image: 'image',
    });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(201);
  });
});
