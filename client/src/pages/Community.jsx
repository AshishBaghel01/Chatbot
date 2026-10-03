import React, { useState, useEffect } from 'react'
import { dummyPublishedImages } from '../assets/assets'
import Loading from './Loading'

function Community() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchImages = async () => {
    setImages(dummyPublishedImages)
    setLoading(false)
  }
  useEffect(() => {
    fetchImages()
  }, [])

  if(loading) return <Loading />

  return (
    <div className='p-6 pt-12 xl'>
        
    </div>
  )
}

export default Community
