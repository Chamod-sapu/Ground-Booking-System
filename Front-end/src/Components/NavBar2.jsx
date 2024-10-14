import React from 'react'

function NavBar2() {
    return (
        <header className='padding-x py-8 absolute z-10 w-[1450px] bg-[#000235]'>
        <nav className='flex justify-between items-center max-container'>

            <a href='/'>
            <img src='../Images/SportZ_logo.png' alt="" className='m-0 w-[100px] h-[29px]' href=""/>
            </a>
            
            <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden text-white'>
            
            <li><a href="/">Home</a></li>
            <li><a href="/login">Venues</a></li>
            <li><a href="/login">Account</a></li>
            <li><a href="/contact">Contact</a></li>

            </ul>
            <div className='hidden max-lg:block'>
            <img src="../Icons/menu.png" alt="menu" className='w-[40px] height-[40px]' />
            </div>
        </nav>
        </header>
    )
}

export default NavBar2