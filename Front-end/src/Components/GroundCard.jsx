const backendUrl = import.meta.env.VITE_BACKEND_URL; 

const GroundCard = ({ nm, img, lct, prc, sprt, cap,onClick }) => {

    return (
        <>
            <a href="/grounddetails" onClick={onClick}>

                <div className="w-[300px] h-[400px] border ring ring-slate-200/20 mt-10 rounded-3xl backdrop-blur-sm bg-[#bac8d956] hover:scale-105 transition duration-500 ">
    
                    <div className="w-[250px] h-[160px] mt-4 mx-6 rounded-2xl  ">
                        <img src={`${backendUrl}${img}`} alt="Ground photo" className="rounded-2xl w-[250px] h-[160px]" />
                    </div>
    
    
                    <div className="w-[250px] h-[160px] mt-3 mx-6 ">
                        <p className="text-white text-center underline font-bold text-xl font-roboto my-1 ">{nm}</p>
                            
                        <div className="ml-6">
                            <div className="grid grid-cols-2 gap-0"><p className="text-white text-left font-bold text-md font-roboto">Location : </p><p className="text-white text-left font-bold text-md font-roboto"> {lct} </p> </div>
                            <div className="grid grid-cols-2 gap-0"><p className="text-white text-left font-bold text-md font-roboto">Sport : </p><p className="text-white text-left font-bold text-md font-roboto"> {sprt} </p> </div>
                            <div className="grid grid-cols-2 gap-0"><p className="text-white text-left font-bold text-md font-roboto">Capacity : </p><p className="text-white text-left font-bold text-md font-roboto"> {cap} </p> </div>
                        </div>
    
                        <div className="flex justify-center border border-white w-[100px] bg-white rounded-3xl mt-5 ml-[70px] ring"> 
                            <span className=" font-bold text-[#000235] px-2 ">Rs.{prc}</span>
                        </div>
    
                    </div>
    
                </div>
            </a>
        </>
    )
    }
    
    export default GroundCard