var dbConnect = require('../../configuration/db.config');

var Books = function(books){
    this.id = books.id;
    this.Title = books.Title;
    this.Author = books.Author;
    this.Description = books.Description;
} 

Books.getAllBooks = (result)=>{
    dbConnect.query('SELECT * FROM blogs', (err,res)=>{
        if(err){
            console.log("error");
            result(null,err);
        }else{
            console.log("detalis featched");
            result(null,res);
        }
    });
}

Books.getAllBooksID = (id,result)=>{
    dbConnect.query('SELECT * FROM blogs WHERE id=?',id,(err,res)=>{
        if(err){
            console.log("error");
            result(null,err);
        }else{
            console.log("detalisgot");
            result(null,res);
        }
    });
}

//new book

// Books.createNewBooks = (bookreqdata,result)=>{
//     dbConnect.query('INSERT INTO blogs SET ? ',bookreqdata,(err,res)=>{
//         if(err){
//             console.log("err while inserting");
//             result(null,err);
//         }else{
//             console.log("books inserted");
//             result(null,res)
//         }
//     })
// }

//delete
Books.deleteBooks = (id, result)=>{
    dbConnect.query("UPDATE blogs SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the books');
            result(null, err);
        }else{
            console.log("books deleted successfully");
            result(null, res);
        }
    });
}
module.exports = Books;