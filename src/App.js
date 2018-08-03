import React, {Component} from 'react';
import Counter from '../src/components/Counter/Counter';

class App extends Component {
	render() {
		return (
			<Counter>
				{
					({count, increment, decrement}) =>
						<div className="counter">
							<button onClick={decrement}>-</button>
							<span>{count}</span>
							<button onClick={increment}>+</button>
						</div>
				}
			</Counter>
		);
	}
}

export default App;
