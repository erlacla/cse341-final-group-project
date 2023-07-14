const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test Library PUT requests', () => {
  test('responds to post /routes/library', async () => {
    const res = await request.put('/routes/library').send({
      name: 'West Library',
      email: 'wlibrary@libraryserver.com',
      address: 'address',
      phone: 'phone',
      hours: 'hours',
      schedule: 'schedule',
      links: 'links',
      image: 'image',
    });
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
});
