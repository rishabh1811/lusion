/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Offers() {
    

    return (
        <>
            <div className="container-fluid font-sans mb-16">
                <div className="flex gap-x-8 h-[560px]
                                890:flex-col 890:gap-y-6 890:h-[672px]">
                    {/* offer 1 */}
                    <div className='bg-cream relative grow-[3] offer-bg-image
                                        890:grow'>
                        <div className="text-center font-light
                                        absolute top-1/2 -translate-y-1/2 left-[13%]
                                        890:left-[50%] 890:-translate-x-1/2">
                            <p className='text-3xl '>MERRY</p>
                            <p className='text-7xl lg:text-5xl'>Christmas</p>
                            <p className='text-8xl xs:text-7xl'>
                                                40<span className="text-4xl">% off</span></p>
                            <button className='px-5 py-3 mt-3
                                              border border-dark bg-white 
                                            hover:bg-dark hover:text-white 
                                            transition duration-300'>
                                                Shop Now</button>
                        </div>
                        <div className=''><img className='' src="" alt="" /></div>
                    </div>



                    {/* offer 2 */}
                    <div className='bg-skin relative grow '>
                        <div className="text-center font-light
                                        absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                                        890:">
                            <p className='text-3xl '>Your Next</p>
                            <p className='text-6xl lg:text-5xl'>Purchase</p>
                            <p className='text-8xl xs:text-7xl'>10<span className="text-4xl">% off</span></p>
                            <button className='px-5 py-3 mt-3
                                              border border-dark bg-white 
                                            hover:bg-dark hover:text-white 
                                            transition duration-300'>
                                                Shop Now</button>
                        </div>
                        
                    </div>



                </div>
            </div>        
        </>
    )
}
