const express = require('express');
const router = express.Router();
const Controller = require('../controllers/delete');

router.delete('/library/libraryImage/:id', Controller.deleteLibraryImage);

router.delete('/book/:id', Controller.deleteBookByID); 
router.delete('/book/bookImage/:id', Controller.deleteBookImage);

router.delete('/account/:id', Controller.deleteAccountByID);
router.delete('/account/accountImage/:id', Controller.deleteAccountImage);


router.delete('/history/:id', Controller.deleteHistoryByID);



module.exports = router;