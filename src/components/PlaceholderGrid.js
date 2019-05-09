import React from 'react';
import PlaceholderGridArticle from './PlaceholderGridArticle';

const PlaceholderGrid = () => {
  return (
    [...Array(10)].map((item, index) => {
      return <PlaceholderGridArticle
        index={index}
        key={index}
      />
    })
  )
}

export default PlaceholderGrid;