import React from 'react';
import Image from "next/image";


export default function Icon(name: any) {
    
    return (
        <div>
            {
                <div>
                    <Image
                        src={`/icon/${name.name}`}
                        alt={`icon name ${name.name}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            }
        </div>
    )
}
