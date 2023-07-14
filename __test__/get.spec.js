const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

describe('Test GET requests', () => {
  test('responds to /library', async () => {
    const res = await request.get('/library');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /library/:libraryId', async () => {
    const res = await request.get('/library/:libraryId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  // test('responds to /library/:libraryId/:parameter', async () => {
  //   const res = await request.get('/library/:libraryId/:parameter');
  //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  // });

  test('responds to /book', async () => {
    const res = await request.get('/book');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /book/:bookId', async () => {
    const res = await request.get('/book/:bookId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  // test('responds to /book/:bookId/:parameter', async () => {
  //   const res = await request.get('/book/:bookId/:parameter');
  //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  // });

  test('responds to /account', async () => {
    const res = await request.get('/account');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /account/:accountId', async () => {
    const res = await request.get('/account/:accountId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  // test('responds to /account/:accountId/:parameter', async () => {
  //   const res = await request.get('/account/:accountId/:parameter');
  //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  // });

  test('responds to /status', async () => {
    const res = await request.get('/status');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  // test('responds to /status/:statusId/:parameter', async () => {
  //   const res = await request.get('/status/:statusId/:parameter');
  //   expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  // });

  test('responds to /history', async () => {
    const res = await request.get('/history');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });

  test('responds to /history/:historyId', async () => {
    const res = await request.get('/history/:historyId');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
