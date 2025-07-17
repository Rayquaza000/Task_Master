import React, { useLayoutEffect, useRef } from 'react'
import "./Header.css";
const Header = () => {
  
  return (
    <header className='flex flex-col h-auto bg-gray-200 justify-center items-center text-2xl' id="headerSection">
      <h1 className='text-orange-700 text-5xl font-bold mt-3.5'>Task Master</h1>
      <p className='font-bold text-2xl'>Your To-do List</p>
      <input type='text' className='border-2 border-black text-3xl p-1 bg-white mt-10 w-100'placeholder='Enter task'></input>
      <div className='inline mt-2'>
        <label className='text-2xl'>High Priority? </label>
        <input type='checkbox' className='w-7 h-7'></input>
      </div>
      <button className='bg-orange-700 text-white p-3 mt-3.5 mb-7 border-2 border-black'>Add task</button>
    </header>
  )
}

export default Header