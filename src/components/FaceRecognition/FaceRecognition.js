import React from 'react';


const faceRecognition = ({imageUrl}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt4'>
			<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
			</div>
		</div>
	);
}




export default faceRecognition;