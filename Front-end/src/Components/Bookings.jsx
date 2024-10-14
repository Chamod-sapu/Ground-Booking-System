const Bookings = ({ ven, prc, from, to, img}) => {
    

    return (
        <div className='h-[130px] w-[463px] bg-[#bac8d956] rounded-xl ml-[30px] flex justify-start gap-10 m-3'> 

            <img src={img} alt="GroundImage" className="w-[127px] h-[114px] border rounded-xl mt-2 ml-3" />

            <div className="text-white">
                <div><p className="pt-2 font-bold underline">{ven}</p></div>
                <div className="pt-3  flex justify-start gap-3"><p className="font-semibold">From :</p><p>{from}</p></div>
                <div className="flex justify-start gap-3"><p className="font-semibold">To :</p><p>{to}</p></div>
                <div className="flex justify-start gap-3"><p className="font-semibold">Price :</p><p>{prc}</p></div>
            </div>

        </div>

    )
}

export default Bookings



