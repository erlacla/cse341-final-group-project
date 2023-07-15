const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test PUT requests', () => {
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

  test('responds to /library/image/:libraryId', async () => {
    const res = await request.put('/library/image/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /library/:libraryId', async () => {
    const res = await request.put('/library/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/image/:bookId', async () => {
    const res = await request.put('/book/image/:bookId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/:bookId/:parameter', async () => {
    const res = await request.put('/book/:bookId/:parameter');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/:bookId', async () => {
    const res = await request.put('/book/:bookId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account/image/:accountId', async () => {
    const res = await request.put('/account/image/:accountId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account/:accountId/:parameter', async () => {
    const res = await request.put('/account/:accountId/:parameter');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account/:accountId', async () => {
    const res = await request.put('/account/:accountId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /status/:statusId', async () => {
    const res = await request.put('/status/:statusId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /status/:statusId/:parameter', async () => {
    const res = await request.put('/status/:statusId/:parameter');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /history/:historyId', async () => {
    const res = await request.put('/history/:historyId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
