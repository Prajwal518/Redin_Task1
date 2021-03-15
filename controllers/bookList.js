
const Books = require('./models/bookMode');
const BooksModel= require('./models/bookMode');

//to get employess list
exports.getBookList = (req,res) =>{
    console.log("got it all");
    BooksModel.getAllBooks((err,books)=>{
        console.log("we are he");
        if(err){
            res.send(err);
        }else{
            res.send(books); 
            console.log(books); 
        }
    });
}

// to get ids

exports.getBookListId = (req,res)=>{
    // console.log("get id");
    BooksModel.getAllBooksID(req.params.id,(err,books)=>{
        console.log("we are here");
        if(err){
            res.send(err);
        }else{
            res.send(books); 
            console.log("book by id"); 
        }
    });
}

// //new Books

// exports.getNewBookList = (req,res)=>{
//     const bookreqData = new Books (req.body);
//     if(req.body.constructor === Object && Object(req.body).length === 0){
//         res.send(400).send({success:false,message:"fill all fields"});
//     }else{
//         console.log("valid data");
//         return;
//         BooksModel.getNewBookList(bookreqData, (err, books)=>{
//             if(err)
//             res.send(err);
//             res.json({status:false,message:"is wrong",data:books});
            
//         });
//     }
// }

//delete 

exports.deleteBooks = (req, res)=>{
    BooksModel.deleteBooks(req.params.id, (err, books)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'books deleted successully!'});
    })
}