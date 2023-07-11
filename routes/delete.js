const express = require('express');
const router = express.Router();
const Controller = require('../controllers/delete');

router.delete('/library/:libraryId', Controller.deleteLibraryById)
router.delete('/library/image/:libraryId', Controller.deleteLibraryImage);

router.delete('/book/:bookId', Controller.deleteBookByID); 
router.delete('/book/bookImage/:bookId', Controller.deleteBookImage);

router.delete('/account/:accountId', Controller.deleteAccountByID);
router.delete('/account/accountImage/:accountId', Controller.deleteAccountImage);

router.delete('/history/:historyId', Controller.deleteHistoryByID);

router.delete('/status/:statusId', Controller.deleteStatusById)

module.exports = router;