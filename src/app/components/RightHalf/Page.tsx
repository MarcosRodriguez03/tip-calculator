'use client'
import React, { useEffect } from 'react'


type iObject = {
    tip: string
    total: string
    reset: () => void
    bgColor: string
}


const RightHalf = (props: iObject) => {
    useEffect(() => {
        props.bgColor
    }, [])
    return (
        <div className='bg-[#00494d] h-[257px] lg:h-[417px] rounded-[10px] px-[20px] lg:px-[60px] py-[30px] lg:py-[40px] relative  '>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <p className='text-white spaceFont mb-[5px]'>Tip Amount</p>
                    <p className='text-[14px] spaceFont text-[#5e7a7d]'>/ person</p>
                </div>

                <p className='text-[#26c0ab] spaceFont text-[32px] lg:text-[46px]'>{props.tip}</p>
            </div>

            <div className='mt-[25px] lg:mt-[50px] flex items-center justify-between'>
                <div className=''>
                    <p className=' text-white spaceFont mb-[5px]'>Total</p>
                    <p className='text-[14px] spaceFont text-[#5e7a7d]'>/ person</p>
                </div>

                <p className='text-[#26c0ab] spaceFont text-[32px] lg:text-[46px]'>{props.total}</p>
            </div>


            <div className='flex justify-center'>
                <button
                    onClick={() => props.reset()}
                    className={` spaceFont absolute  lg:h-[48px] ${props.bgColor} bottom-0 mb-[24px] lg:mb-[40px]  min-w-[280px] lg:w-[335px]   cursor-pointer     hover:bg-[#A0E8Df] text-[#00494d] flex items-center justify-center text-[24px] rounded-[5px]`}>
                    RESET
                </button>
            </div>


        </div>
    )
}

export default RightHalf
