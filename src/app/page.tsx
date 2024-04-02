'use client'
import Image from "next/image";

import peopleIcon from '@../../../images/icon-person.svg'
import dollarIcon from '@../../../images/icon-dollar.svg'
import RightHalf from "./components/RightHalf/Page";
import TipBtn from "./components/TipBtn/Page";
import { useEffect, useRef, useState } from "react";
{/* <TipBtn  number={5} color="bg-[#00494d]" /> */ }

export default function Home() {

  const [bill, setBill] = useState<number>();
  const [people, setPeople] = useState<number>();
  const [tip, setTip] = useState<number>()
  const [totalTip, setTotalTip] = useState<string>("$0.00");
  const [total, setTotal] = useState<string>("$0.00");

  const [bgBtn, setBgBtn] = useState<string>("bg-[#0D686D]");


  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);


  const handleTip = (para: number) => {
    setTip(para)
  }

  const reset = () => {
    if (input1Ref.current !== null) {
      input1Ref.current.value = ''; // Clear the first input field
      setBill(undefined)
    }
    if (input2Ref.current !== null) {
      input2Ref.current.value = ''; // Clear the second input field
      setTip(undefined)
    }
    if (input3Ref.current !== null) {
      input3Ref.current.value = ''; // Clear the third input field
      setPeople(undefined)
    }
    setBgBtn("bg-[#0D686D]")
    setTotal("$0.00")
    setTotalTip("$0.00")

  }



  useEffect(() => {


    if (bill && bill <= 0) {
      console.log("above 0 bill please")
      setTotal("$0.00")
      setTotalTip("$0.00")
      setBgBtn("bg-[#0D686D]")
    }
    if (people && people <= 0) {
      console.log("above 0 people please")
      setTotal("$0.00")
      setTotalTip("$0.00")
      setBgBtn("bg-[#0D686D]")
    }

    if (tip && tip < 0) {
      console.log("no negative tip")
      setTotal("$0.00")
      setTotalTip("$0.00")
      setBgBtn("bg-[#0D686D]")

    }

    if (tip && people && people > 0 && bill && bill > 0) {
      setBgBtn("bg-[#26c0ab]")
      console.log(people, tip, bill)
      let tipNum = Number(tip)
      let billNum = Number(bill)
      let peopleNum = Number(people)

      let MathTotal = (billNum + (billNum * tipNum / 100)) / peopleNum
      let MathTotalTip = (billNum * tipNum / 100) / peopleNum
      // console.log(String(MathTotal.toFixed(2)))
      // console.log(String(MathTotalTip.toFixed(2)))
      setTotal("$" + String(MathTotal.toFixed(2)))
      setTotalTip("$" + String(MathTotalTip.toFixed(2)))

    }





  }, [bill, people, tip])



  return (
    <div className="flex justify-center mt-[144px] lg:mt-0">
      <div className="flex justify-center  items-center w-[920px] h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] bg-[#ffffff] rounded-[10px] py-[32px] px-[32px]">
          <div className="px-[10px] flex flex-col justify-between py-[16px]">

            <div>
              <p className="text-[#00494d] spaceFont mb-[12px]">Bill</p>
              {/* <div className="flex items-center h-[48px] bg-[#f4fafa] px-[10px] rounded-[5px]     ">
                <Image className="w-[15px] h-[15px]" alt="people" src={dollarIcon} />
                <input
                  onChange={(e) => setBill(e.target.value)}
                  className="cursor-pointer  bg-transparent text-right w-full text-[24px]" placeholder="0" type="number" />
              </div> */}
              <div className="relative ">
                <input
                  type="number"
                  required
                  ref={input1Ref}
                  onChange={(e: any) => setBill(e.target.value)}
                  className="border spaceFont text-[24px] placeholder-[#7f9c9f] text-[#00494d] font-bold border-gray-300 rounded-md py-2 px-4 pl-10 h-[48px] bg-[#f4fafa] w-full border-none text-right"
                  placeholder="0"
                />
                <Image
                  src={dollarIcon}
                  className="absolute left-3 top-4 w-4 h-4"
                  alt="Image"
                />
              </div>

            </div>




            <div className="mt-[36px]">
              <p className="mb-[12px] spaceFont text-[#00494d]">Select Tip %</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px]">
                <TipBtn number={5} setTip={handleTip} />
                <TipBtn number={10} setTip={handleTip} />
                <TipBtn number={15} setTip={handleTip} />
                <TipBtn number={25} setTip={handleTip} />
                <TipBtn number={50} setTip={handleTip} />
                <input

                  ref={input2Ref}
                  onChange={(e: any) => setTip(e.target.value)}
                  type="number" placeholder="Custom" className="cursor-pointer spaceFont px-2 rounded-[5px] text-[24px] bg-[#f4fafa] placeholder-[#5e7a7d] text-[#5e7a7d] placeholder-center text-right  " />
              </div>
            </div>



            <div className="mt-[36px]">
              <p className="mb-[12px] spaceFont text-[#00494d]">Number of People</p>


              {/* <div className="flex items-center h-[48px] bg-[#f4fafa] px-[10px] rounded-[5px]">
                <Image className="w-[15px] h-[15px]" alt="people" src={peopleIcon} />
                <input
                  onChange={(e) => setPeople(e.target.value)}
                  className="cursor-pointer bg-transparent text-right w-full text-[24px]" placeholder="0" type="number" />
              </div> */}


              <div className="relative ">
                <input
                  type="number"
                  required
                  ref={input3Ref}
                  onChange={(e: any) => setPeople(e.target.value)}
                  className="border spaceFont text-[24px] placeholder-[#7f9c9f] text-[#00494d] font-bold border-gray-300 rounded-md py-2 px-4 pl-10 h-[48px] bg-[#f4fafa] w-full border-none text-right"
                  placeholder="0"
                />
                <Image
                  src={dollarIcon}
                  className="absolute left-3 top-4 w-4 h-4"
                  alt="Image"
                />
              </div>
            </div>

          </div >
          <div>
            <RightHalf bgColor={bgBtn} reset={reset} tip={totalTip} total={total} />
          </div>




        </div>
      </div>
    </div>


  );
}
