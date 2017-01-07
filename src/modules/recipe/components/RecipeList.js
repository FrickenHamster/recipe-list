import React, { Component, PropTypes } from 'react';
import {
	ListView,
	View,
	StyleSheet
}  from 'react-native';

import RecipeListItem from './RecipeListItem';

import { Actions } from 'react-native-router-flux';

export default class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.array,
		selectRecipe: PropTypes.func
	};

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(props.recipes)
		};
		this.createSelectCallback = this.createSelectCallback.bind(this);
	}
	
	createSelectCallback(id) {
		//this.props.selectRecipe(id);
		Actions.recipeShow({
			recipeID: id
		});
	}

	renderItem(rowData) {
		return (
			<RecipeListItem
				name={rowData.name}
				selectRecipe={() => {
					this.createSelectCallback(rowData.id)}}
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

