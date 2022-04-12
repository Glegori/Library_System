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
]

const Books = (props) => {
    return (
      <div className="retCard">
        <h2 className="bookTitle">{props.title}</h2>
        <p>return: {props.retD}</p>
        {/* <p>Return by : {props.retDate}</p> */}
        
      </div>
    )
  }

  const App = () => {
    return (
      <div className="retCont">
  
        {books.map(books => (
          <Books title={books.name} retD={books.returnDate}/>)
        )}
  
      </div>
    )
  }


  ReactDOM.render(
    <App />,
    document.getElementById('ret')
  )