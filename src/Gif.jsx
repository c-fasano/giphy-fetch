import React from 'react'

function Gif({gif}) {
  return (
    <>
      <img src={gif.data.images.original.url} alt='gif' />
    </>
  )
}

export default Gif