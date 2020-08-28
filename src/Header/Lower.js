import React, { useEffect, useRef, useState } from 'react';

import './Header.css';

const Lower = () => {
    
    useEffect( () => {
        window.onscroll = () => {
            // console.log('WINDOW SCROLLY: ', window.scrollY)
        };
    }, [] );

    
    return(
        <div>
            <div
                className='mid-container'
            >
                <div
                    className='div-2'
                >
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                </div>
            </div>
            <div
                className='mid-container'
            >
                <div
                    className='div-2'
                >
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                    <div
                        className='innerText'
                    >
                        Next Box
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lower;