import React from 'react';
import Image from "next/image";
import Acces from '../api/acces.json';


export default function Header() {
    return (
        <header className="w-full h-full lg:h-auto lx:h-[80vh] pb-10 lg:pb-0">
            <div className="contain w-full h-full flex flex-col">
                <div className="flex flex-col lg:flex-row w-full justify-between mt-5">
                    <div className="relative">
                        <h1 className="
                            mt-[7px]
                            text-[62px]
                            sm:text-[80px]
                            lg:text-[104px]
                            text-center
                            lg:text-left
                            leading-[70px]
                            text-[#D78C69]
                            lg:max-w-[600px] 
                            uppercase

                        ">ПЕТЕРБУРГ</h1>
                        <h2 className='
                         mt-0 mb-0
                        text-[#D78C69]
                            text-[62px]
                            lg:text-[84px]
                            leading-[80px]
                            text-center
                            lg:text-left
                        '> сквозь года</h2>
                        <h4 className="
                            text-[30px]
                            lg:text-[48px]
                            text-[#4F7290]
                            text-center
                            lg:text-left
                        ">с Владимиром Заруцким</h4>
                        <ul className="mt-8 ml-5 space-y-2 text-neutral-700 list-disc text-xl marker:text-amber-500">
                            <li>Нарисуйте <span className="text-[#4F7290] font-bold">12 пейзажей:</span> от ретро Петербурга до сегодняшних дней</li>
                            <li>Изучите <span className="text-[#4F7290] font-bold">способы передачи особенностей архитектуры</span> с помощью акварели</li>
                            <li>Научитесь передавать <span className="text-[#4F7290] font-bold">художественные образы и замыслы</span></li>
                        </ul>
                        <div className="relative w-full xl:w-3/4 h-[70vh] block lg:hidden">
                            <Image
                                src="/image/img-2x-scale-2_00x.png"
                                alt="Header background"
                                style={{ objectFit: 'contain' }}
                                priority
                                fill
                            />
                        </div>
                        <div className='w-full flex justify-center lg:justify-start'>
                            <a
                                href="#useful"
                                className="
                            flex items-center justify-center
                            px-12 py-5 gap-2.5
                            max-w-[370px]
                            bg-gradient-to-r from-[#D8775D] to-[#FF8B32]
                            rounded-md
                            text-white uppercase font-normal
                            text-lg tracking-[2.5px]
                            cursor-pointer
                            transition duration-300 ease-in-out
                            hover:from-[#FF8B32] hover:to-[#D8775D]
                            mt-5
                        ">Узнать подробности</a>
                        </div>

                    </div>
                    <div className="relative w-3/4 lg:w-1/3 h-[70vh] hidden lg:block">
                        <Image
                            src="/image/img-2x-scale-2_00x.png"
                            alt="Header background"
                            style={{ objectFit: 'contain' }}
                            priority
                            fill
                        />
                    </div>
                </div>
                <div className="relative w-full justify-between text-neutral-700 mt-10 xl:mt-0" >
                    <div className="relative flex flex-col sm:flex-row sm:flex-wrap lg:flex-row w-full justify-center items-center xl:justify-between gap-10 mb-10">
                        {
                            Acces?.map(item => (
                                <div className="header-list border-4 p-8 lg:p-4 border-amber-500 w-3/4 sm:w-2/5 xl:w-1/5 text-xl text-center " key={item.id}>
                                    <p className="text-[#4F7290] font-bold">{item.title} <span className="text-black font-normal">{item.text}</span></p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </header>
    )
}
