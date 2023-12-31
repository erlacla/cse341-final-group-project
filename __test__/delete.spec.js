const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test DELETE requests', () => {
  test('responds to post /routes/library', async () => {
    const res = await request.delete('/routes/library').send({
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

  test('responds to /library/:libraryId', async () => {
    const res = await request.delete('/library/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /library/image/:libraryId', async () => {
    const res = await request.delete('/library/image/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/:bookId', async () => {
    const res = await request.delete('/book/:bookId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/image/:bookId', async () => {
    const res = await request.delete('/book/image/:bookId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account/:accountId', async () => {
    const res = await request.delete('/account/:accountId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /history/:historyId', async () => {
    const res = await request.delete('/history/:historyId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /status/:statusId', async () => {
    const res = await request.delete('/status/:statusId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
