import React, {useState} from 'react';

function Form(props) {
  const [gifSeacrh, setGifSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    props.handleSubmit(gifSeacrh)
    setGifSearch("")
  }

  const handleChange = e => {
    const search = e.target.value
    setGifSearch(search)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="gif"
          type="text"
          value={gifSeacrh}
          onChange={handleChange}
          placeholder="giphy"
        />
        <input type="submit" value="Find Gif" />
        <button onClick={refreshPage}>Make API Call Again</button>
      </form>
    </>
  )
}

export default Form