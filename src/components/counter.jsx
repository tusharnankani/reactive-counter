import React, { Component } from "react";

class Counter extends Component {
	// jsx have style - for inline styling - these properties can be referenced using style={ this.styles };
	// OR we can use them directly style={{fontWeight=30}}
	styles = {
		fontSize: 12,
		fontWeight: "bold",
	};

	/* renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;

		return (
			// creating a list of tags, using `map` and arrow functions
			<ul>
				{this.state.tags.map((tag) => (
					// the key is necessary for each item and has to be unique in that specific list;
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	} */

	// handleIncrement = () => {
	// 	// this line of code won't work, we can't modify the state directly, hence we have to use the `setState()`
	// 	// this.state.count += 1;
	// 	this.setState({ value: this.state.value + 1 });
	// };

	render() {
		// props are a properties of the components;
		// console.log(this.props);

		// dynamically changing class names;
		// SIDE NOTE: press `ctrl + shift + R` --> to refactor;
		/* let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes; */

		return (
			// We should return a single component (because `React.createElement('div')`), so we could enclose all of it in a div;
			// Now since all of this is already under div id="root", Instead of putting the div here, we can put a React.fragment;
			<div>
				{/* Inside these curly braces, we can write valid javascript code, and to render dynamic values */}
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>
				{/* <div>
					// CONDITIONAL RENDERING 
					{this.state.tags.length === 0 && "Please create a new tag!"}
					{this.renderTags()}
				</div> */}

				<button
					// raising events, since if we have to delete or modify the state of `Counters`, only that specific component can do it.
					// Hence, we raise an event, for the component to do it, using props.
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		// object destructuring;
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
