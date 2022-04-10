//gathering module
const route = require("express").Router();
//getting the model exported from other file
let Borrow = require('../backend/models/borrow.model.js');
let Member = require('../backend/models/member.model.js');
let Book = require('../backend/models/book.model.js');

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Borrow.find({memberId : req.body.memberId})
        .then(borrows => res.json(borrows))
        .catch(err => res.status(400).json('err: ' + err));
});
//need to figure out how to group it together in a new object declaration
route.route('/addBorrow').post((req, res) => {
    const memberId = req.body.memberId;
    const bookId = req.body.bookId;
    const issueDate = req.body.issueDate;
    const dueDate = req.body.dueDate;
    const ret = [];
    Borrow.find()
        .sort('-borrowId')
        .limit(1)
        .then(borrow => {
            let borrowId = borrow[0].borrowId + 1;
            let borrowToAdd = new Borrow();

            await Member.find({memberId : memberId})
            .then( member => {
                for(i = 0; i<bookId.length; i++){
                    member.bookId.push(bookId[i]);
                    member.save()
                    .then(()=>console.log("member saved in the instance method"));
                }
               /*
                Member.updateOne({memberId: memberId}, {bookId: member.bookId})
                .then(member => {
                    console.log("booklist of member: " + member.fName + " " 
                    + member.lName + " is now: " + member.bookId)
                });
                */
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
            res.json(books)});
    });
})
// must find a way to add to the return type then remove from members bookId's
route.route('/return').post((req, res) => {
    Borrow.findOne({borrowId: req.body.borrowId})
    .then(borrow => {
        let returnBookId = [req.body.bookId1, req.body.bookId2, req.body.bookId3]
        let dateOfReturn = Date.now();
        let ret = new Return();

        borrow.return.push(ret);

        /**
         * put the member BookID modify section here
         */


        borrow.save()
        .then(()=>{
            console.log("return processed via the instance method")
            res.json("return processed")
        });
    });
})

module.exports = route;