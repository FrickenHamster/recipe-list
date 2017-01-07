import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Text
}  from 'react-native';

export default class InstructionList extends Component {

	static propTypes = {
		temperature: PropTypes.number,
		time: PropTypes.number,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text style={styles.titleText}>How to Cook:</Text>
				<View style={styles.instructionTextContainer}>
					<Text style={styles.instructionText}>{this.props.temperature}F</Text>
					<Text style={styles.instructionText}>{this.props.time} min</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	instructionText: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center',
	},
	instructionTextContainer: {
		alignItems: 'center',
	},
	titleText: {
		color: 'black',
		fontSize: 24
	}
});
