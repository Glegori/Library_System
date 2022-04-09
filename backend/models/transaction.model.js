const mong = require('mongoose');
const Schema = mong.Schema;

const transactionSchema = new Schema({
        transactionId: {type: Number, required: true},
        memberId: {type: Number, required: true},
        payment: {type: SchemaTypes.Double, required: true},
        date: {type: Date, required: true},
        },{timestamps:true}
);

const Transaction = mong.model('Transaction', transactionSchema);

module.exports = Transaction; 