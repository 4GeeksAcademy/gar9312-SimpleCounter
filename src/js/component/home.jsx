import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'; 

function Counter() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(interval); 
	}, []);

	const formattedSeconds = seconds.toString().padStart(6, '0');
	const digits = formattedSeconds.split('').map((digit, index) => (
		<div key={index} className="digit">
			{digit}
		</div>
	));

	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
			<div className="counter">
				<div className="clock-icon">
					<FontAwesomeIcon icon={faClock} className="small-icon" />
				</div>
				{digits}
			</div>
		</div>
	);
}

export default Counter;

