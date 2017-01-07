import React, { Component, PropTypes } from 'react';
import {
	View
}  from 'react-native';
import { connect } from 'react-redux';

import RecipeList from '../components/RecipeList';
import TopBar from '../../../components/TopBar';

class RecipeMain extends Component {
	
	static propTypes = {
		recipes: PropTypes.array,
		selectRecipe: PropTypes.func
	};
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<View>
				<TopBar
					titleName={"My Recipes"}
				/>
				<RecipeList
					recipes={this.props.recipes}
					selectRecipe={this.props.selectRecipe}
				/>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipes: Object.keys(state.recipes).map((key, index) => state.recipes[key]
		)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		selectRecipe: (id) => {
			dispatch(selectRecipe(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeMain);
