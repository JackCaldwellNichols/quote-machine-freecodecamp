import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [quote, setQuote] = useState([])
const [loading, setLoading] = useState(false)
const [error, seteError] = useState(false)
  const getQuote = async () => {
    setLoading(true)
    try {
    const res = await axios.get('https://quote-garden.onrender.com/api/v3/quotes/random')
    setQuote(res.data.data)
    setLoading(false)
  } catch (error) {
    setLoading(False)
    seteError(true)
    
  }
  }


  useEffect(() => {
    getQuote()
  }, [])

const handleClick = () => {
  getQuote()
}

  return (
    <div className='wrapper'>
      <h1>FreeCodeCamp QuoteMachine</h1>
        {loading ? 
        (<div id='quote-box'>
        <span>
          Loading quote...
        </span>
        </div>
        ) : (
          <div id='quote-box'>
          {quote.map((q) => 
          <>
        <div className="top">
        <div id='text'>
            <p>{q.quoteText}</p>
        </div>

        <div id='author'>
            <p>{q.quoteAuthor}</p>
        </div>
        </div>
        <div className='bottom'>
          <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank'>
            <button>Tweet</button>
          </a>
          <button id='new-quote' onClick={handleClick}>New Quote</button>
        </div>
        </>
           )} 
      </div>
      )}
      {error && <div id='quote-box'><span>Something went wrong!</span></div>}
    </div>
  )
}

export default App
