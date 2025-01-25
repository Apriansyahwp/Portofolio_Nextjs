import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Hamburger from './Hamburger'

interface Com {
  url: string
  title: string
}

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const links: Com[] = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/works', title: 'Project' },
    { url: '/contact', title: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav
      className={`${
        visible ? '' : '-translate-y-full'
      } fixed bg-transparent z-10 backdrop-blur-sm w-full duration-300 ease-in-out flex justify-between items-center px-11 md:px-4 py-4 md:justify-evenly`}
    >
      <Link
        href='/'
        className='bg-slate-800 w-[93px] py-1 px-[7px] text-white text-base rounded font-bold'
      >
        Rian <span className='bg-white text-black rounded px-1'>.tsx</span>
      </Link>
      <div
        className={`main-menu justify-evenly hidden md:flex md:w-1/2 lg:w-1/3 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        {links.map((link: Com) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Menu hamburger */}
      <Hamburger onClick={handleMenuToggle} />
      <div className='hidden sosmed justify-center gap-4 md:flex'>
        <a
          href='https://www.instagram.com/apriansyahwp_/'
          target='_blank'
          className='duration-300 hover:text-teal-500'
        >
          <svg
            role='img'
            width='25'
            className='fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Instagram</title>
            <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
          </svg>
        </a>
        <a
          href='mailto:apriansyahwp844@gmail.com'
          target='_blank'
          className='duration-300 hover:text-teal-500'
        >
          <svg
            role='img'
            width='25'
            className='fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Gmail</title>
            <path d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z' />
          </svg>
        </a>
        <a
          href='https://github.com/Apriansyahwp'
          target='_blank'
          className='duration-300 hover:text-teal-500'
        >
          <svg
            role='img'
            width='25'
            className='fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Github</title>
            <path d='M12 0C5.373 0 0 5.373 0 12c0 5.247 3.438 9.708 8.207 11.284.6.111.827-.26.827-.577 0-.288-.01-1.06-.015-2.08-3.338.723-4.039-1.59-4.039-1.59-.546-1.381-1.335-1.749-1.335-1.749-1.093-.746.083-.731.083-.731 1.21.086 1.849 1.24 1.849 1.24 1.07 1.83 2.808 1.303 3.493.996.107-.774.419-1.303.762-1.597-2.66-.303-5.466-1.338-5.466-5.947 0-1.314.469-2.392 1.24-3.236-.124-.303-.538-1.526.13-3.175 0 0 1.009-.32 3.29 1.214 1.03-.288 2.135-.433 3.23-.438 1.096.005 2.201.151 3.23.438 2.281-1.534 3.29-1.214 3.29-1.214.668 1.65.254 2.872.13 3.175.773.844 1.24 1.922 1.24 3.236 0 4.612-2.812 5.644-5.472 5.947.429.36.821.977.821 1.975 0 1.424-.015 2.564-.015 2.94 0 .319.226.693.832.577C20.562 21.708 24 17.247 24 12c0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
