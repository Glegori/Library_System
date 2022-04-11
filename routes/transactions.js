//gathering module
const route = require("express").Router();
//getting the model exported from other file
let Transaction = require('../backend/models/transaction.model.js');
let Member = require('../backend/models/member.model.js');

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Transaction.find()
        .then(transactions => res.json(transactions))
        .catch(err => res.status(400).json('err: ' + err));
});
//need to figure out how to group it together in a new object declaration
route.route('/addTransaction').post((req, res) => {
    const memberId = req.body.memberId;
    const payment = req.body.transaction;
    const date = Date.now();

    Transaction.find()
        .sort('-transactionId')
        .limit(1)
        .then(transaction => {
            const transactionId = transaction[0].transactionId + 1;
            let transactionToAdd = new Transaction({
                memberId:memberId,
                transactionId: transactionId,
                payment: payment,
                date: date,
            });
            Member.findOne({memberId : memberId})
            .then(member => {
                let newremaining  = member.outstanding - payment;
                Member.updateOne({memberId : memberId},{outstanding: newremaining})
                .then(console.log("books added to members booklist"));
            });

            transactionToAdd.save()
            .then(()=>{
                res.json("new transaction added");
            })
        });
});

route.route('/:id').get((req,res) => {
    Book.findByID(req.paramms.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Err: ' + err))
})


module.exports = route;