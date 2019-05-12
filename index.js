import React from 'react';
import TextInput from 'ink-text-input';

import yn from 'yn';

export default class ConfirmInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: props.value
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(val) {
		const { onSubmit } = this.props;
		onSubmit(yn(val));
	}

	render() {
		return (
			<TextInput
				value={this.state.query}
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			/>
		);
	}

	handleChange(query) {
		this.setState({ query });
	}
}
