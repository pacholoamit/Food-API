import React from 'react';

import brain from './brain.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='center ma4 mt0'>			
 			<div className="Tilt-inner pa3 center"><img  alt='logo' src={brain}/></div>
		</div>
	);
}

export default Logo;