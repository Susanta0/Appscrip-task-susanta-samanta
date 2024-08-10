import Link from 'next/link'
import React from 'react'
import "../globals.css"
export const Header2 = () => {
  return (
    <>
    <header className="bg-white border-b-2">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-center">
      

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-20">
            <li>
              <Link className="navLink text-black font-bold text-xl relative " href="#"> SHOP </Link>
            </li>

            <li>
              <Link className="navLink text-black font-bold text-xl relative " href=""> SKILLS </Link>
            </li>

            <li>
              <Link className="navLink text-black font-bold text-xl relative " href="#"> STORIES </Link>
            </li>

            <li>
              <Link className="navLink text-black font-bold text-xl relative " href="#"> ABOUT </Link>
            </li>

            <li>
              <Link className="navLink text-black font-bold text-xl relative " href="#"> CONTACT US </Link>
            </li>

          </ul>
        </nav>
      </div>

     
    </div>
  </div>
</header>
    </>
  )
}
