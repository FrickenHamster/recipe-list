import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight
}  from 'react-native';

export default class RecipeListItem extends Component {

	static propTypes = {
		name: PropTypes.string,
		selectRecipe: PropTypes.func
	};
	
	constructor(props) {
		super(props);
		this._onPressHandler = this._onPressHandler.bind(this);
	}
	
	_onPressHandler() {
		this.props.selectRecipe()
	}

	render() {
		return (
			<TouchableHighlight 
				style={styles.recipeItemContainer}
				onPress={this._onPressHandler}
			>
				<Text style={styles.recipeItemText}>
					{this.props.name}
				</Text>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	recipeItemContainer: {
		alignItems: 'center',
		borderBottomWidth: 1,
		height: 60,
		flexDirection: 'row',
		paddingLeft: 20
	},
	recipeItemText: {
		color: 'black',
		fontSize: 20
	}
});
