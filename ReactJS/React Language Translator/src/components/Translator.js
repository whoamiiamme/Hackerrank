import React, { useState } from 'react';

function Translator({ translations }) {
	const [ text, setText ] = useState('');

	return (
		<React.Fragment>
			<div className='controls'>
				<div className='input-container'>
					<span>input:</span>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						className='text-input'
						data-testid='text-input'
					/>
				</div>
				<div className='input-container'>
					<span>output:</span>
					<input
						type='text'
						value={translations.get(text) || ''}
						className='text-output'
						data-testid='text-output'
						readOnly
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Translator;
