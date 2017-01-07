import React, { Component, PropTypes } from 'react';
import {
	ListView,
	View,
	StyleSheet,
	Text
}  from 'react-native';

export default class IngredientList extends Component {

	static propTypes = {
		ingredients: PropTypes.array
	};

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(props.ingredients)
		};
	}

	renderItem(rowData) {
		return (
			<View style={styles.ingredientTextContainer}>
				<Text style={styles.ingredientText}>
					{rowData}
				</Text>
			</View>);
	}

	render() {
		return (
			<View>
				<Text style={styles.titleText}>Materials:</Text>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderItem.bind(this)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ingredientText: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center'
	},
	ingredientTextContainer: {
		alignItems: 'center',
	},
	titleText: {
		color: 'black',
		fontSize: 24
	}
});
