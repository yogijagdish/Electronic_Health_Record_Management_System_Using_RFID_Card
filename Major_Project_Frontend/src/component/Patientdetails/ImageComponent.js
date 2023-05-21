import React from 'react'

const ImageComponent = ({imageUrl}) => {
  console.log(imageUrl);
  return( <img src={imageUrl} alt="person"/>);
}

export default ImageComponent
