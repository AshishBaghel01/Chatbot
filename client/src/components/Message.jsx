import React from 'react'

function Message({message}) {
  return (
    <div>
      {message.role===user ? (
        <div className='flex items-start justify-end my-4 gap-2'>
          <div className='flex flex-col gap-2 p-2 px-2 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30
          rounded-md max-w-2xl'>
            <p className='text-sm dark:text-primary'> {message.content}</p>
            <span className='text-xs text-gray-400 dark:text-[#B1A6C0]'>
              {messsage.timestamp}
            </span>
          </div>
          <img/>
          <div/>
      ) : (
        <div>

        </div>
      )}
    </div>
  )
}

export default Message