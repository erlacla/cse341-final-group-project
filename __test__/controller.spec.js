const app = require('../server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);

const {
  deleteLibraryById,
  deleteLibraryImage,
  deleteAccountByID,
  deleteAccountImage,
  deleteBookByID,
  deleteBookImage,
  deleteHistoryByID,
  deleteStatusById,
} = require('../controllers/delete.js');

describe('Test DELETE controller requests', () => {
  expect(deleteLibraryById('{ _id:649dbfe7b6e57157805c3873}', true)).toBe(200);
});
