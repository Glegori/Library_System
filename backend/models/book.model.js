const mong = require('mongoose');
const Schema = mong.Schema;

const bookSchema = new Schema({
        bookID: {type: String, required: true}},{timestamps:true}
);

const Book = mong.model('Book', bookSchema);

module.exports = Book; 