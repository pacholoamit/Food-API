import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'Input any food image and I will detect what food it is.'}
			</p>
			<div className='center'>
				<div className='form center pa3 br2 shadow-5'>
					<input placeholder= "Input image link here" className='f4 pa2 w-70 center'  type= 'tex' onChange={onInputChange}/>
					<button
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;