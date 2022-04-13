const libraryCatalog = [
  {
    id: '1',
    name: 'The Fault in Our Stars',
    author: 'John Green',
    desc: 'The Fault In Our Stars is a fabulous book about a young teenage girl who has been diagnosed with lung cancer and attends a cancer support group.',
    borrowedDate: '22/03/2022',
    returnDate: '09/05/2022',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg'
  },
  {
      id: '2',
      name: 'Da Vinci Code',
      author: 'Dan Brown',
      desc: 'The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.',
      borrowedDate: '22/03/2022',
      returnDate: '09/05/2022',
      url: 'https://images.penguinrandomhouse.com/cover/9780307277671'
  },
      {
        id: '3',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '4',
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'
      },
      {
        id: '5',
        name: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        desc: 'The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribners Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
      },
      {
        id: '6',
        name: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        desc: 'The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable. The events are related after the fact.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg'
      },
      {
        id: '7',
        name: 'Where the Crawdads Sing',
        author: 'Delia Ownes',
        desc: 'A woman who raised herself in the marshes of the deep South becomes a suspect in the murder of a man she was once involved with.',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81HA6TJ5K-L.jpg'
      },
      {
        id: '8',
        name: 'Atlas of the Heart',
        author: 'Brene Brown',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL.jpg'
      },
      {
        id: '9',
        name: 'The Handmaids Tale',
        author: 'Margaret Atwood',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61+niMeDeHL.jpg'
      }
  ]
const Books = (props) => {
    return (
      <div className="card libcat">
        <div className="bookcovercont">
          <img className="bookCover" src={props.imgurl} alt="The Da Vinci Code"></img>
        </div>
        <h2 className="bookTitle">{props.title}</h2>
        <p>{props.author}</p>
        {/* <p>Return by : {props.retDate}</p> */}
        <div className="bookContent">

        <p>{props.desc}</p>
        <div className="bookAction">
            <a href=""><p>Borrow Book</p></a>
            <a href=""><p>View Details</p></a>
        </div>

        </div>
        
      </div>
    )
  }

  const App = () => {
    return (
      <div className="container">
  
        {libraryCatalog.map(books => (
          <Books title={books.name} imgurl={books.url} author={books.author} retDate={books.returnDate} desc={books.desc}/>)
        )}
  
      </div>
    )
  }


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )