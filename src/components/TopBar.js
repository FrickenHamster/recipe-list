import React, { Component, PropTypes } from 'react';
import {
	View,
	Text
}  from 'react-native';

import {
	StyleSheet,
} from 'react-native';

export default class TopBar extends Component {

	static propTypes = {
		titleName: PropTypes.string
	};

	render() {
		return (
			<View style={styles.topBarContainer}>
				<Text style={styles.titleText}>{this.props.titleName}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	titleText: {
		flex: 1,
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	topBarContainer: {
		alignItems: 'center',
		backgroundColor: 'purple',
		flexDirection: 'row',
		height: 60
	}
});
