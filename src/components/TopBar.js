import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet
}  from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TopBar extends Component {

	static propTypes = {
		titleName: PropTypes.string,
		leftIcon: PropTypes.string,
		rightIcon: PropTypes.string,
		leftFunc: PropTypes.func,
		rightFunc: PropTypes.func
	};

	constructor(props) {
		super(props);
		let leftView;
		if (props.leftIcon) {
			if (props.leftIcon.substr(0, 2) === 'i:')
				leftView = (<View><Icon
					name={props.leftIcon.substr(2)}
					size={20}
					onPress={this._leftIconPressHandler.bind(this)}
				/></View>);
			else
				leftView = (<Text
					style={styles.sideIconText}
					onPress={this._leftIconPressHandler.bind(this)}
				>
					{props.leftIcon}
				</Text>);
		}
		let rightView;
		if (this.props.rightIcon) {
			if (props.rightIcon.substr(0, 2) === 'i:')
				rightView = (<Icon
					name={props.rightIcon.substr(2)}
					size={20}
					onPress={this._rightIconPressHandler.bind(this)}
				/>);
			else
				rightView = (<Text
					style={styles.sideIconText}
					onPress={this._rightIconPressHandler.bind(this)}
				>
					{props.rightIcon}
				</Text>);
		}

		this.state = {
			leftView: leftView,
			rightView: rightView
		};

		this._leftIconPressHandler = this._leftIconPressHandler.bind(this);
		this._rightIconPressHandler = this._rightIconPressHandler.bind(this);
	}

	_leftIconPressHandler() {
		if (this.props.leftFunc)
			this.props.leftFunc();
	}

	_rightIconPressHandler() {
		if (this.props.rightFunc)
			this.props.rightFunc();
	}

	render() {
		return (
			<View style={styles.topBarContainer}>
				<View style={styles.sideIcon}>
					{this.state.leftView}
				</View>
				<Text style={styles.titleText}>{this.props.titleName}</Text>
				<View style={styles.sideIcon}>
					{this.state.rightView}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sideIcon: {
		alignItems: 'center',
		width: 50
	},
	sideIconText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	titleText: {
		flex: 1,
		color: 'white',
		fontSize: 20,
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
