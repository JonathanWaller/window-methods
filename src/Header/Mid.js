import React, { useEffect, useRef, useState } from 'react';

import './Header.css';

const Mid = () => {
    const [ inputValue, setInputValue ] = useState( );
    const [ buttonClicked, setButtonClicked ] = useState( 0 );
    
    useEffect( () => {
        window.onscroll = () => {
            console.log('SCROLLING')
            if ( window.scrollY ) {
                console.log('Y-AXIS')
            }
            if( window.scrollX ) {
                console.log('X-AXIS')
            }
        };
        return () => {
            window.onscroll = null;
        };
    }, [] );
    
    const handleChange = ( e ) => {
        // window.localStorage.removeItem( 'name' );
        
        setInputValue( e );
        window.localStorage.setItem('name', e );
        window.sessionStorage.setItem( 'name', e );
    }
    
    const handleClick = () => {
        // window.localStorage.removeItem( 'clicked' );
        
        if( !buttonClicked ) {
            setButtonClicked( 1 );
        } else {
            setButtonClicked( buttonClicked + 1 );
        }
        if( window.localStorage.clicked ) {
            window.localStorage.setItem('clicked', Number(window.localStorage.clicked) + 1 )
        } else {
            window.localStorage.setItem('clicked', Number(1))
        }
    }
    
    return(
        <div
            className='mid-container'
        >
            <div>
                <div>
                    Next Box
                </div>
                <div
                    className='inner-container'
                >
                    <input onChange={ e => handleChange( e.target.value )}/>
                </div>
                
                <div
                    className='inner-container' 
                >
                <div>
                    <span>Local Name: </span>
                    <span>{ window.localStorage.name }</span>
                </div>
                <div>
                    <span>Session Name: { window.sessionStorage.name }</span>
                </div>
                </div>
                
                <div
                   className='inner-container'
                >
                    <button
                        className='button'
                        onClick={handleClick}
                        // disabled={ 
                        //     window.localStorage.clicked 
                        //     && Number( window.localStorage.clicked ) > 3
                        // }
                    >
                        Try again
                    </button>
                    {
                        window.localStorage.clicked 
                        ?
                        <div
                            style={{ color: window.localStorage.clicked 
                            && Number( window.localStorage.clicked ) > 3
                            ? 'red'
                            : undefined
                            }}
                        >
                        You have clicked the button {window.localStorage.clicked} time(s).
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Mid;