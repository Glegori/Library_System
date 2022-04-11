//gathering module
const route = require("express").Router();
//getting the model exported from other file
let Borrow = require('../backend/models/borrow.model.js');
let Member = require('../backend/models/member.model.js');
let Book = require('../backend/models/book.model.js');

class rtrn {
    constructor(returnBookId, dateOfReturn) {
        this.returnBookId = returnBookId;
        this.dateOfReturn = dateOfReturn;
    }
}
//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Borrow.find({memberId : req.body.memberId})
        .then(borrows => res.json(borrows))
        .catch(err => res.status(400).json('err: ' + err));
});
//need to figure out how to group it together in a new object declaration
route.route('/addBorrow').post((req, res) => {
    const memberId = req.body.memberId;
    const bookId = JSON.parse(req.body.bookId);
    const issueDate = req.body.issueDate;
    const dueDate = req.body.dueDate;
    const ret = [];

    Borrow.find()
        .sort('-borrowId')
        .limit(1)
        .then(borrow => {
            const borrowId = borrow[0].borrowId + 1;
            let borrowToAdd = new Borrow({
                borrowId: borrowId,
                memberId: memberId,
                bookId: bookId,
                issueDate: issueDate,
                dueDate: dueDate,
                return: ret
            });
            Member.findOne({memberId : memberId})
            .then(member => {
                let booksMod = member.books;
                if(bookId != null){
                    for(i = 0; i<bookId.length; i++){
                        if(!(booksMod.includes(bookId[i])))
                            booksMod.push(bookId[i]);
                    }
                }
                Member.updateOne({memberId : memberId},{books: booksMod})
                .then(console.log("books added to members booklist"));
            });

            borrowToAdd.save()
            .then(()=>{
                res.json("new borrow added");
            })
        });
});

route.route('/remaining').get((req, res) => {
    Borrow.findOne({borrowId: req.body.borrowId})
    .then(borrow => {
        let toBeReturned = [];
        for(i = 0; i<borrow.bookId.length; i++){
            toBeReturned.push(borrow.bookId[i]);
        }
        for(i = 0; i<borrow.return.length; i++){
            for(x = 0; x<borrow.return[i].returnBookId.length; x++){
                const ind = toBeReturned.indexOf(borrow.return[i].returnBookId[x]);
                if(ind > -1){
                    toBeReturned.splice(ind, 1);
                }
            }
        }
        console.log(toBeReturned);
        Book.find({bookId : { $in : toBeReturned}})
        .then(books => {
            console.log(books);
            res.json(books)});
    });
})
// must find a way to add to the return type then remove from members bookId's
route.route('/return').post((req, res) => {
    Borrow.findOne({borrowId: req.body.borrowId})
    .then(borrow => {
        let returnBookId = JSON.parse(req.body.bookId);
        let dateOfReturn = Date.now();
        let ret = new rtrn(returnBookId, dateOfReturn);

        borrow.return.push(ret);

        borrow.save()
        .then(()=>{
            Member.findOne({memberId : borrow.memberId})
            .then(member => {
                const currentBooks = member.books;
                let replaceBooks = currentBooks;
                for(i = 0; i < returnBookId.length; i++){
                    replaceBooks.splice(currentBooks.indexOf(returnBookId[i]), 1);
                }
                Member.updateOne({memberId:borrow.memberId},{books: replaceBooks})
                .then(console.log("books removed from memberlist"));
            });
            console.log("return processed via the instance method")
            res.json("return processed")
        });
    });
})

module.exports = route;