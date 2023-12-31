const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

// const {
//   deleteLibraryById,
//   deleteLibraryImage,
//   deleteAccountByID,
//   deleteAccountImage,
//   deleteBookByID,
//   deleteBookImage,
//   deleteHistoryByID,
//   deleteStatusById,
// } = require('../controllers/delete');

// describe('Test DELETE controller requests', () => {
//   test('responds to deleteLibraryById', () => {
//     expect(deleteLibraryById('{ _id:649dbfe7b6e57157805c3873}', true)).toBe(
//       200
//     );
//   });
// });

const {
  createLibrary,
  createBook,
  createAccount,
  createStatus,
  createHistory,
} = require('../controllers/post');

describe('Test POST controller requests', () => {
  const createLib = {
    name: 'george',
    email: 'george@george.com',
    address: 'george',
    phone: '2453336652',
    hours: 'george',
    schedule: 'george',
    links: 'george',
    image: 'george',
  };
  test('responds to createLibrary', async () => {
    const res = await request.post('/library').send(createLib);
    expect(res.text).toBe('"You must login to run this request."');
  });
});
