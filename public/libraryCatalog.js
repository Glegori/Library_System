const libraryCatalog = [
      {
        id: '1',
        name: 'The Fault in Our Stars',
        author: 'John Green',
        moons: 'none',
        borrowedDate: '10/09/2021',
        returnDate: '23/12/2021',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg'
      },
      {
          id: '2',
          name: 'Harry Potter and The Sorcerers Stone',
          author: 'JK Rowling',
          moons: 'none',
          borrowedDate: '20/03/2021',
          returnDate: '01/05/2022',
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
        
      </div>
    )
  }

  const App = () => {
    return (
      <div className="container">
  
        {libraryCatalog.map(books => (
          <Books title={books.name} imgurl={books.url} author={books.author} retDate={books.returnDate}/>)
        )}
  
      </div>
    )
  }


  ReactDOM.render(
    <App />,
    document.getElementById('root2')
  )