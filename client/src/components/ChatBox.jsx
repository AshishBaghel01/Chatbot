import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Message from './Message'

function ChatBox() {
  const { selectedChat, theme } = useAppContext()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  


  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages || [])
    }
  }, [selectedChat])

  return (
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'>
      <div className='flex-1 mb-5 overflow-y-scroll'>
        {messages.length === 0 && (
          <div className='h-full flex flex-1 justify-center flex-col items-center gap-2 text-primary'>
            <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt='' className='w-full max-w-56 sm:max-w-68' />
            <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white '>Ask me anything.</p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={`${message.timestamp || index}-${index}`} message={message} />
        ))}
        {/*Three dots loader*/}
        {loading && <div className='loader flex items-center gap-1.5'>
               <div className='w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce dark:bg-white'></div>
                <div className='w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce dark:bg-white'></div>
                <div className='w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce dark:bg-white'></div>
          </div>}
      </div>
      {/*prompt input box*/}
      <form onSubmit={onSubmit} className='bg-primary/20 dark:bg-[#583C79]/30 border border-primary dark:border-[#80609F]/20
      rounded-full w-full max-w-2xl p-3 pl-4 max-auto flex gap-4 item-center'>
          <select onChange={(e)=>setMode(e.target.value)} vlaue={mode} className='text-sm pl-3 pr-2 outline-none'>
            <option className='dark:bg-purple-900' value="text">Text</option>
            <option className='dark:bg-purple-900' value="image">Image</option>
          </select>
          <input/>

      </form>
    </div>
  )
}

export default ChatBox
