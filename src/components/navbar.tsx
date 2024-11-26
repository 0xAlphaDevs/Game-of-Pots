import React from 'react'
import { ConnectButton } from './ConnectButton'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <p className='text-xl font-bold'>Game of Pots</p>
      <ConnectButton />
    </div>
  )
}

export default Navbar