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
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '5',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '6',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '7',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '8',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '9',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
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