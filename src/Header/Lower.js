import React, { useEffect, useRef, useState } from 'react';

import './Header.css';

const Lower = () => {
    
    useEffect( () => {
        console.log('FIRST')
        let scrollY = window.scrollY;
        window.onscroll = () => {
            console.log('HEYYYY')
            console.log('scrollY: ', scrollY );
            console.log('WINDOW SCROLLY: ', window.scrollY)
            if ( window.scrollY > scrollY ) {
                console.log('HHHH')
                // debouncedCheckForVisibleUnreadMessages();
            }
            scrollY= window.scrollY;
        };
        return () => {
            window.onscroll = null;
            // messageDataRef.current = null;
        };
        //eslint-disable-next-line
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