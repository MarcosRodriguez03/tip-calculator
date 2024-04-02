import React, { useEffect } from 'react'

type iProps = {
    number: number
    setTip: (para: number) => void

}

const TipBtn = (props: iProps) => {



    return (
        <button
            onClick={() => props.setTip(props.number)}
            className={`h-[48px] spaceFont font-bold focus:text-[#00494d] focus:bg-[#26c0ab] cursor-pointer w-full  bg-[#00494d] hover:text-[#00494d]  hover:bg-[#A0E8Df] text-[#f4fafa] flex items-center justify-center text-[24px] rounded-[5px]`}>
            {props.number}%
        </button>
    )
}

export default TipBtn
