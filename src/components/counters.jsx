import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		// destructuring arguments;
		const { onReset, onDelete, onIncrement, counters } = this.props;

		return (
			<div>
				<button
					onClick={onReset}
					className='btn btn-primary btn-sm m-2'
				>
					Reset
				</button>
				{/* value and selected etc. come under props, key is a special argument that is a unique key to identify it */}
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onIncrement={onIncrement}
						onDelete={onDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
