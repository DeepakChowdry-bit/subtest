'use client'
import Image from 'next/image'
import Menubar from './Menubar'
import Searchbox from './Searchbox'
import Link from 'next/link'


const Navbar = () => {



  return (
    <>
      <div className='flex items-center justify-center h-20'>
        <div className='flex items-center justify-between w-11/12'>
          <Menubar />
          <h2>Mahadev</h2>
          <div className='flex items-center justify-end w-1/2 space-x-5'>
            <Searchbox />
            <Link href={'/cart'}>
              <Image id="cart-icon" src={'/bag.svg'} width={30} height={30} alt='bag' priority />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar