import React from 'react';

import './counter.css';

const Counter = ({count, increment, decrement}) =>
	<div className="counter">
		<button onClick={decrement}>-</button>
		<span>{count}</span>
		<button onClick={increment}>+</button>
	</div>;

export default Counter;