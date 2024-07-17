import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

function Counter() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [seconds]);

	const formattedSeconds = seconds.toString().padStart(6, '0');
	const digits = formattedSeconds.split('').map((digit, index) => (
		<div key={index} className="digit">
			{digit}
		</div>
	));

	return (
		<div className="counter">
			<div className="clock-icon">
				{}
			</div>
			{digits}
		</div>
	);
}

export default Counter;

