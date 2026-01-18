"use client"
import React, { useState } from 'react';
import ApiQuestions from '../api/questions.json';

export default function Questions() {
    const [openIds, setOpenIds] = useState<number[]>([]); // какие вопросы открыты
    const [lastClicked, setLastClicked] = useState<number | null>(null); // последний кликнутый вопрос

    // открыть/закрыть конкретный вопрос
    const toggleQuestion = (id: number) => {
        setLastClicked(id);

        if (openIds.includes(id)) {
            setOpenIds(openIds.filter(openId => openId !== id)); // закрываем
        } else {
            setOpenIds([...openIds, id]); // открываем
        }
    }

    // открыть все вопросы
    const openAll = () => setOpenIds(ApiQuestions.map(q => q.id));

    // закрыть все вопросы
    const closeAll = () => setOpenIds([]);

    return (
        <div className="xl:margin-top mt-10 flex ">
            <div className="contain">
                <h2 className="text-center mt-0 mb-0 text-[#D78C69]             
                text-[52px]
                xl:text-[84px] leading-[80px]">
                    Частые вопросы
                </h2>

                <div className="mt-5 xl:mt-15 flex flex-col gap-4 ">
                    {ApiQuestions.map((item) => {
                        const isOpen = openIds.includes(item.id);
                        const isLast = lastClicked === item.id;

                        return (
                            <div key={item.id} className="rounded shadow-sm overflow-hidden border-4 border-amber-500">
                                <button
                                    onClick={() => toggleQuestion(item.id)}
                                    className={`w-full cursor-pointer text-left px-5 py-4 font-semibold text-xl transition-colors duration-300
                                        ${isLast ? 'text-[#D78C69]' : 'text-[#4F7290]'}
                                        bg-white hover:bg-gray-100`}
                                >
                                    {item.title}
                                </button>
                                <div
                                    className={`px-5 text-[#4F7290] text-lg transition-all duration-300 ease-in-out
                                        ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'}
                                    `}
                                >
                                    {item.text}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
