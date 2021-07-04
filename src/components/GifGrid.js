import React from 'react'
import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      { loading && <p className='animate__animated animate__fadeIn'>Loading...</p> }
      <div className="card-grid">
        {
            images.map(img => (
              <GridItem
                key={img.id}
                { ...img }
              />
            ))
          }
      </div>
    </>
  )
}
