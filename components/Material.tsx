"use client"
import React, { useState, useRef } from 'react';
import ApiMaterial from '../api/order.json'
import Icon from './Icon/Icon';
import Modal from './Modal';


export default function Material() {
    const [openId, setOpenId] = useState<number | null>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    return (
        <div className='margin-top contain'>
            <h2 className='
            text-center  
            mt-0 mb-0
            text-[#D78C69]
            text-[52px]
            xl:text-[84px]
            leading-[50px]
            xl:leading-[80px]
        '>Материалы на курс</h2>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center xl:justify-between mt-10 xl:mt-20'>
                {
                    ApiMaterial.map(item => (
                        <div key={item.id} className='flex flex-col items-center w-ful md:w-1/2 xl:w-1/4 text-center mb-10 mb-0'>
                            <div className='w-24 h-24 relative'>
                                <Icon name={item.image} />
                            </div>
                            <span className='text-xl text-[#4F7290]  font-bold mt-5 mb-5'>{item.name}</span>
                            {
                                Array.isArray(item.list) && (
                                    <div className='relative'>
                                        <div
                                            ref={buttonRef}
                                            className={`
                                                border border-[#4F7290] relative  text-[#4F7290]  rounded-full px-4 py-2 font-medium text-xl mt-2 cursor-pointer
                                                ${openId === item.id ? 'z-30' : 'z-0'}
                                                `}

                                            onMouseDown={(e) => {
                                                e.stopPropagation();
                                                setOpenId(openId === item.id ? null : item.id);
                                            }} >
                                            {item["list-name"]}
                                        </div>
                                        {
                                            openId === item.id && (
                                                <Modal
                                                    items={item.list}
                                                    buttonRef={buttonRef}
                                                    onClose={() => setOpenId(null)}
                                                />
                                            )
                                        }
                                    </div>

                                )
                            }

                            {
                                typeof item.list === 'string' && (
                                    <span className='text-xl'>{item.list}</span>
                                )
                            }


                        </div>
                    ))
                }
            </div>
            <div className='h-2 w-wull bg-[#ffd6b6] mt-5'></div>
            <div className='text-center text-xl w-full mt-5'>Всё это рекомендации, не обязательно использовать то же самое!</div>
        </div>

    )
}