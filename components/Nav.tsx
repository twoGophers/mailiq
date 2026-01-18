import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav className="shadow-md rounded-b-lg sticky top-0 bg-white  z-100 h-20 hidden md:block">
        <div className="contain h-full flex align-items-center justify-between">
          <div className='flex justify-center items-center'>
            <Image
              src={'/image/d385477c03d0e6bf65d399c3b05883c9_pixian_ai.png'}
              width={80}
              height={80}
              alt="Logo"
            />
          </div>
          <ul className="flex items-center justify-center gap-3 text-neutral-700 ">
            <li><a href={'/'}>О чем курс</a></li>
            <li><a href={'/'}>Программа курса</a></li>
            <li><a href={'/'}>Эксперт</a></li>
            <li><a href={'#tarif'}>Записаться на курс</a></li>
            <li><a href={'/'}>Контакты</a></li>
          </ul>
          <div className="flex items-center justify-center gap-3">icons</div>
        </div>

      </nav>
    </div>

  )
}
