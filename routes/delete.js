const express = require('express');
const router = express.Router();
const Controller = require('../controllers/delete');

// router.delete('/library/:searchType', Controller.deleteLibraryBySearchType);  THIS NEEDS TO BE A PUT REQUEST INSTEAD
router.delete('/library/libraryImage/:id', Controller.deleteLibraryImage); // done

router.delete('/book/:id', Controller.deleteBookByID); // done
router.delete('/book/bookImage/:id', Controller.deleteBookImage); // done

router.delete('/account/:id', Controller.deleteAccountByID); // done
router.delete('/account/accountImage/:id', Controller.deleteAccountImage); // done


router.delete('/history/:id', Controller.deleteHistoryByID); // done execpt needs to make sure is admin before deleting



module.exports = router;