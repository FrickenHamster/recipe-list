import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Text
}  from 'react-native';


export default class RecipeListItem extends Component {

	static propTypes = {
		name: PropTypes.string
	};

	render() {
		return (
			<View style={styles.recipeItemContainer}>
				<Text style={styles.recipeItemText}>
					{this.props.name}
				</Text>
			</View>
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
