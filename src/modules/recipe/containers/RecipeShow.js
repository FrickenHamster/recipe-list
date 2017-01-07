import React, { Component, PropTypes } from 'react';
import {
	Alert,
	View,
	TouchableWithoutFeedback
}  from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import TopBar from '../../../components/TopBar';

import IngredientList from '../components/IngredientList';
import InstructionList from '../components/InstructionList';

const actions = {};

class RecipeShow extends Component {

	static propTypes = {
		recipe: PropTypes.object
	};
	
	constructor(props) {
		super(props);
		
		this._editClickHandler = this._editClickHandler.bind(this);
	}

	_editClickHandler() {
		Actions.recipeEdit({
			recipeID: this.props.recipe.id
		})
	}

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={this._editClickHandler}
			>
			<View>
				
				<TopBar
					titleName={this.props.recipe.name}
					leftIcon={'i:chevron-left'}
					leftFunc={() => {Actions.pop();}}
				/>
				<IngredientList
					ingredients={this.props.recipe.ingredients}
				/>
				<InstructionList
					time={this.props.recipe.cookMethod.time}
					temperature={this.props.recipe.cookMethod.temperature}
				/>
			</View>
			</TouchableWithoutFeedback>

		)
	}
}

function mapStateToProps(state, props) {
	return {
		recipe: state.recipes[props.recipeID]
	};
}

export default connect(mapStateToProps, actions)(RecipeShow);
