import React, { useEffect, useRef, useState } from 'react';

import './Header.css';

const Header = () => {  
  const headerRef = useRef( null ); 
  const [ width, setWidth ] = useState( 0 );
  
    useEffect( () => {
        window.addEventListener( 'resize', updateScreenWidth );
        setWidth( window.innerWidth )
    }, [] );
  
    const updateScreenWidth = ( ) => {
        setWidth( window.innerWidth )
    }
    
    return(
        <div>
            <header
                className='header'
                ref={ headerRef }
                style={
                    { fontSize: width > 900 ? 30 : 20 }
                    }
            >
                {
                    width > 900
                    ? 'The Story of Black Bears in the Woods'
                    : 'Black Bears'
                }
            </header>
        </div>
    )
}

export default Header;