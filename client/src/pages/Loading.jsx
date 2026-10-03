import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {

  const navigate = useNavigate()
  
  useEffect(() => {
    const timeout = setTimeout(() => { navigate('/') },8000
    )
  return ()=> clearTimeout(timeout)}
  )
  
  return (
  <div className="bg-gradient-to-b from-[#531B81] to-[#29184B] flex items-center justify-center h-screen w-screen text-white">
    <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
  </div>
)
}

export default Loading