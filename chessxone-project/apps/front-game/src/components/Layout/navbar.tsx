import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between h-[90px] border-b text-lg border-cyan-500  w-full p-3 text-sky-100'> 
        <p>Chessxone</p>
        <p>@Ayoub.B</p>
    </div>
  )
}

export default Navbar