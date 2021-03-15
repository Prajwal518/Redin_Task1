const express= require('express');
const router= express.Router();

const bookListController = require('../bookList');

router.get('/',bookListController.getBookList);
//get book by id
router.get('/:id',bookListController.getBookListId);

router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;