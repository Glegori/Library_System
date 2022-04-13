const libraryCatalog = [
      {
        id: '1',
        name: 'The Fault in Our Stars',
        author: 'John Green',
        moons: 'none',
        borrowedDate: '22/03/2022',
        returnDate: '09/05/2022',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg'
      },
      {
          id: '2',
          name: 'Da Vinci Code',
          author: 'Dan Brown',
          moons: 'none',
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