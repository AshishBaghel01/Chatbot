
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Sidebar from './components/Sidebar'
import Community from './pages/Community'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { assets } from './assets/assets'
import './assets/prism.css'
import './assets/prism.css'
import Loading from './pages/Loading'

function App() {

  const {pathname}=useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  if(pathname === '/loading') return <Loading/>

  return (
    <>
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert'
          onClick={() => setIsMenuOpen(true)}
          alt='Open menu'
        />
      )}

      <div className='dark:bg-gradient-to-b dark:from-[#242124] dark:to-[#000000] dark:text-white'>
        <div className='flex h-screen w-screen'>
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  )

}
export default App