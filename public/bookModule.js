const books = [
    {
      id: '1',
      name: 'Da Vinci Code',
      author: 'Dan Brown',
      moons: 'none',
      borrowedDate: '22/03/2022',
      returnDate: '09/05/2022',
      url: 'https://images.penguinrandomhouse.com/cover/9780307277671'
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
      name: 'Da Vinci Code',
      author: 'Dan Brown',
      moons: 'none',
      borrowedDate: '22/03/2022',
      returnDate: '09/05/2022',
      url: 'https://images.penguinrandomhouse.com/cover/9780307277671'
    }
    // {
    //   id: '4',
    //   name: 'Mars',
    //   diameter: '4,212 mi',
    //   moons: '2',
    //   desc: 'The fourth planet from the Sun and the second smallest planet in the solar system. Mars is often described as the "Red Planet" due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
    //   url: 'img/mars.jpg'
    // },
    // {
    //   id: '5',
    //   name: 'Jupiter',
    //   diameter: '86,881.4 mi',
    //   moons: '79',
    //   desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
    //   url: 'img/jupiter.jpg'
    // },
    // {
    //   id: '6',
    //   name: 'Saturn',
    //   diameter: '72,367.4 mi',
    //   moons: '62',
    //   desc: 'Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.',
    //   url: 'img/saturn.jpg'
    // },
    // {
    //   id: '7',
    //   name: 'Uranus',
    //   diameter: '31,518 mi',
    //   moons: '27',
    //   desc: 'Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope.',
    //   url: 'img/uranus.jpg'
    // },
    // {
    //   id: '8',
    //   name: 'Neptune',
    //   diameter: '30,599 mi',
    //   moons: '14',
    //   desc: 'Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.',
    //   url: 'img/neptune.jpg'
    // },
  ];

  const libraryCatalog = [
    {
        id: '1',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '2',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      },
      {
        id: '3',
        name: 'Harry Potter and the Sorcerers Stone',
        author: 'JK Rowling',
        desc: 'Harry Potter a wizard by birth explores the whole new world of magic on his 11th birthday',
        url: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700'
      }
  ]
const Books = (props) => {
    return (
      <div className="card">
        <div className="bookcovercont">
          <img className="bookCover" src={props.imgurl} alt="The Da Vinci Code"></img>
        </div>
        <h2 className="bookTitle">{props.title}</h2>
        <p>{props.author}</p>
        <p>Return by : {props.retDate}</p>
        
      </div>
    )
  }

  const App = () => {
    return (
      <div className="container">
  
        {books.map(books => (
          <Books title={books.name} imgurl={books.url} author={books.author} retDate={books.returnDate}/>)
        )}
  
      </div>
    )
  }


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )