import React, { useEffect, useState } from 'react'
import './App.css';
import Form from './Form';
import Gif from './Gif';



function App() {
  const [gifData, setGifData] = useState("")
  const [gifSearch, setGifSearch] = useState("")
  

  const handleSubmit = search => {
    setGifSearch(search)
  }
  
  useEffect(() => {
    let gifURL = `http://api.giphy.com/v1/gifs/random?api_key=78QA7JMoJWOqt4dwLbG1GzRcaz0b7BUH&tag=${gifSearch}`

    const makeApiCall = () => {
      fetch(gifURL)
      .then(res => res.json())
      .then(data => {
        setGifData((data))
      })
    }
    makeApiCall()
  }, [gifSearch])

  return (
    <div className="GiphyApp">
      <div>Giphy App</div>
      <Form handleSubmit={handleSubmit} />
      {gifData ? <Gif gif={gifData} /> : null}
    </div>
  )
}

export default App;
