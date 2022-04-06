const mong = require('mongoose');
const Schema = mong.Schema;

const bookSchema = new Schema({
        bookId: {type: Number, required: true},
        title: {type: String, required: true},
        edition: {type: Number, required: false},
        publisher: {type: String, required: true},
        authorId:{type: Number, required: true},
        },{timestamps:true}
);

const Book = mong.model('Book', bookSchema);

module.exports = Book; 