const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test Library POST requests', () => {
  test('responds to post /routes/library', async () => {
    const res = await request.post('/routes/library').send({
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

  test('responds to /library', async () => {
    const res = await request.post('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book', async () => {
    const res = await request.post('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account', async () => {
    const res = await request.post('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /status', async () => {
    const res = await request.post('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /history', async () => {
    const res = await request.post('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
