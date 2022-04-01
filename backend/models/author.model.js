const mong = require('mongoose');
const Schema = mong.Schema;

const authSchema = new Schema({
        authorId: {type: Number, required: true},
        fname: {type: String, required: true},
        lname: {type: String, required: true},
        },{timestamps:true}
);

const Author = mong.model('Author', authSchema);

module.exports = Author; 