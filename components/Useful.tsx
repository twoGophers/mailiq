import React from 'react'
import Image from "next/image";


export default function Useful() {
    return (
        <div className='margin-top contain flex flex-col xl:flex-row justify-center items-center'>
            <div id='useful' className='outline-offset-2 outline-solid outline-amber-500 outline-4 useful w-full xl:w-3/5 pt-0 xl:pt-16 pl-0 xl:pl-16 pb-30 xl:pb-16 pr-4 '>
                <h2 
                className='mt-0 mb-0
                            text-[#D78C69]
                            text-[50px]
                            xl:text-[84px]
                            leading-[60px]
                            xl:leading-[80px]
                            text-center
                            xl:text-left
                        '>Для кого будет полезен курс</h2>
                <p className='mt-5 text-xl text-center xl:text-left'>На моем курсе «Петербург сквозь года с Владимиром Заруцким» вы научитесь рисовать акварелью городские пейзажи. Этот курс для тех, кто хочет <span className='text-[#4F7290] font-bold'>научиться или усовершенствовать свои навыки в акварели</span> . Уверен, вам понравится!</p>
            </div>
            <div className='border-none  xl:border-4 border-amber-500 -mt-20 xl:mt-0 w-full xl:w-2/5 h-[70vh] relative'>
                <Image
                    src="/image/img-2x-scale-2_00x.jpg"
                    alt="Header background"
                    fill
                    style={{ objectFit: 'cover' }} 
                    className="w-full h-auto"
                    priority
                />
            </div>
        </div>
    )
}
