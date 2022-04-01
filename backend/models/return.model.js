const mong = require('mongoose');
const Schema = mong.Schema;

const returnSchema = new Schema({
        borrowId: {type: Number, required: true},
        memberId: {type: Number, required: true},
        bookId: {type: Number, required: true},
        date: {type: Date, required: true},
        },{timestamps:true}
);

const Return = mong.model('Return', returnSchema);

module.exports = Return; 