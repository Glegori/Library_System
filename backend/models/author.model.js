const mong = require('mongoose');
const Schema = mong.Schema;

const authSchema = new Schema({
        authorId: {type: Number, required: true},
        fName: {type: String, required: true},
        lName: {type: String, required: true},
        },{timestamps:true}
);

const Author = mong.model('Author', authSchema);

module.exports = Author; 