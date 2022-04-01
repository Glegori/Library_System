const mong = require('mongoose');
const Schema = mong.Schema;

const memberSchema = new Schema({
        memberId: {type: Number, required: true},
        fname: {type: String, required: true},
        lname: {type: String, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        books:{type: [Number], required: true},
        Outstanding:{type: Number, required: true},
        },{timestamps:true}
);

const Member = mong.model('Member', memberSchema);

module.exports = Member; 