"use client"
import React, { useState, useEffect } from 'react';
import ApiTarif from "../api/tarif.json";

export default function Tarif() {
    const [valut, setValut] = useState('₽');
    const [multiplier, setMultiplier] = useState(1); // коэффициент для всех цен

    // пересчитываем multiplier при смене валюты
    const changeValut = (v: string) => {
        setValut(v);
        if (v === '₽') setMultiplier(1);
        else if (v === '₴') setMultiplier(2);
        else if (v === '$') setMultiplier(5);
        else if (v === '€') setMultiplier(6);
    };

    return (
        <div className='tarif margin-top relative py-5 xl:py-20' id='tarif'>
            <div className='contain flex flex-col justify-center h-full'>
                <h2 className='
                text-center 
                mt-0
                xl:mt-5 
                mb-0 
                text-[#D78C69] 
                text-[50px]
                xl:text-[84px] 
                leading-[80px]
                '>Тарифы</h2>

                <div className='flex flex-col  xl:flex-row w-full items-center xl:justify-between   gap-10 mt-5 xl:mt-10'>
                    {ApiTarif.map(item => (
                        <div key={item.id} className='border-4 border-amber-500 flex flex-col w-full max-w-[450px] md:w-1/2 xl:w-1/3 bg-white pb-10'>
                            <h2 className='bg-[#4F7290] text-white uppercase text-center text-[34px] py-5'>{item.name}</h2>

                            <ul className='list-disc px-10 py-5 space-y-1 marker:text-amber-500 text-xl'>
                                {item?.list?.map(li => (
                                    <li key={li.id}>{li.text}</li>
                                ))}
                            </ul>

                            <div className='text-[#4F7290] text-3xl xl:text-5xl w-full text-center my-5'>
                                {new Intl.NumberFormat('ru-RU').format(item.price * multiplier)} {valut}
                            </div>

                            <div className='w-[80%] flex flex-row justify-between m-auto px-10 mt-5'>
                                {['₽', '₴', '$', '€'].map(cur => (
                                    <button
                                        key={cur}
                                        onClick={() => changeValut(cur)}
                                        className={`h-10 w-10 hover:bg-[#D78C69] cursor-pointer text-white ${valut === cur ? 'bg-[#D78C69]' : 'bg-[#FFD6B6]'
                                            }`}
                                    >
                                        {cur}
                                    </button>
                                ))}
                            </div>
                            <div className='w-full flex justify-center'>
                                <button className="
                                flex items-center justify-center
                                px-10 py-5 gap-2.5
                                max-w-[370px]
                                bg-gradient-to-r from-[#D8775D] to-[#FF8B32]
                                rounded-md
                                text-white uppercase font-normal
                                text-lg tracking-[2.5px]
                                cursor-pointer
                                transition duration-300 ease-in-out
                                hover:from-[#FF8B32] hover:to-[#D8775D]
                                m-5
                            ">
                                    Принять участие
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
