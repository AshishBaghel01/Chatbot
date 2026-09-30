import React, { useState, useEffect } from 'react'

function Community() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchImages = async () => {
    setImages(dummyPublishImages)
    setLoading(false)
  }
  useEffect(() => {
    fetchImages()
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Community
