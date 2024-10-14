import React from 'react'


function Landing() {
return (
    <>
        <section id='Landing' className='mt-28 w-[1450px] flex xl:flex-row flex-col min-h-screen gap-10 max-container '>

        <div className='flex justify-between'>
            <div className='w-[660px] h-[550px]'>

                <h1 className='text-white font-montserrat text-8xl font-bold '>
                    <span>
                        <p>Book Sport</p>
                        <p>Pitches And</p>
                        <p>Courts</p>
                    </span>
                </h1>

                <div className='mt-4'>
                    <p className='text-white text-2xl'>
                        Find Sports Facilities In A Range Of Cities
                    </p>
                    <p className='text-white text-2xl'>
                        Across Sri Lanka
                    </p>
                </div>

                <div className='flex justify-center w-[400px] h-[50px border border-[#A8F6E8] rounded-full ml-[15%] mt-10'>
                    <a href="/signup">
                        <button className='text-white font-semibold text-4xl pt-1 pb-3' href="">
                            Sign Up
                        </button>
                    </a>
                </div>

            </div>

            <div className='w-[660px] h-[550px]'>
                <img src='../Images/Landing page/Default_ground_arena_2.png' />
            </div>

        </div>

        </section>


        <div className='flex w-[1320px] h-[200px] mt-[-120px] xl:flex-row flex-col gap-10'>

            <p className='text-white font-semibold text-4xl'> Associations </p>

            <div className="w-[1320px] h-[120px] mt-20 ml-[-310px] rounded-lg backdrop-blur-sm bg-white/20 ">
                
                <div className='w-[1220px] h-[100px] flex justify-between mx-10 mt-2.5'>
                    <a href="">
                        <img src="../Images/Landing page/pngegg.png" alt="Ministry" className='h-[100px]'/>
                    </a>

                    <a href="">
                        <img src="../Images/Landing page/Sri Lanka Hockey logo.jpg" alt="SL Hockey" className='h-[100px]'/>
                    </a>

                    <a href="">
                        <img src="../Images/Landing page/Sri Lanka Cricket.png" alt="SL Cricket" className='h-[100px]' />
                    </a>

                    <a href="">
                        <img src="../Images/Landing page/Sri_Lanka_national_football_teams.png" alt="Sl Football" className='h-[100px]' />
                    </a>

                    <a href="">
                        <img src="../Images/Landing page/Srilanka_rugby.jpg" alt="SL Rugby" className='h-[100px]' />
                    </a>
                </div>
            </div>

        </div>
</>

  ) 
}

export default Landing