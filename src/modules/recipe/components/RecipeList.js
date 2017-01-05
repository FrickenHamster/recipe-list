import React, { Component, PropTypes } from 'react';
import {
	ListView,
	View,
	StyleSheet
}  from 'react-native';

import RecipeListItem from './RecipeListItem';

export default class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.array
	};

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(props.recipes)
		};
		console.log(this.state.dataSource);
	}

	renderItem(rowData) {
		return (
			<RecipeListItem
				name={rowData.name}
			/>);
	}


	render() {
		return (
			<View>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderItem.bind(this)}
				/>
			</View>
		)
	}


}

