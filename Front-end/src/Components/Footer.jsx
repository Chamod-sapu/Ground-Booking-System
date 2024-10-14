import React from 'react'

function Footer() {
  return (
    <section className='max-lg:hidden text-white absolute inset-x-0 bottom-0 ml-[64px] w-[1320px] h-[150px] -mb-32 '>

      <div >
        <span className='text-white font-semibold text-3xl '>Quick Links</span>
        <hr className='border border-white'/>

        <div className='w-[1320px] h-[100px]'>
          <span className='flex-1 flex justify-between items-center gap-32 mr-10 mt-2'>
            <a href="/contact">Contact us</a>
            <a href="">Terms & conditions</a>
            <a href="">Privacy & Policies</a>
            <a href="/contact">About us</a>
          </span>
        </div>

      </div>

    </section>
  )
}

export default Footer