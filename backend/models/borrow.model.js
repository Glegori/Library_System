const mong = require('mongoose');
const Schema = mong.Schema;

const borrowSchema = new Schema({
        borroweId: {type: Number, required: true},
        memberId: {type: Number, required: true},
        bookId: {type: [Number], required: true},
        issueDate:{type: Date, required: true},
        dueDate:{type: Date, required: true},
        return:[{returnBookId:[Number], dateOfReturn:Date}]
        },{timestamps:true}
);

const Borrow = mong.model('Borrow', borrowSchema);

module.exports = Borrow; 