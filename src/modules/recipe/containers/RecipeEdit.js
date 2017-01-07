import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback
}  from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { updateRecipe } from '../actions';

import TopBar from '../../../components/TopBar';
import RecipeEditOptions from '../components/RecipeEditOptions';

const actions = {};

class RecipeEdit extends Component {

	static propTypes = {
		recipe: PropTypes.object,
		updateRecipe: PropTypes.func
	};

	constructor(props) {
		super(props);
		
		this.state = {
			temperature: this.props.recipe.cookMethod.temperature,
			time: this.props.recipe.cookMethod.time
		};
		
		this._selectTemperature = this._selectTemperature.bind(this);
		this._selectTime = this._selectTime.bind(this);
		this._saveHandler = this._saveHandler.bind(this);
	}
	
	_selectTemperature(selectedOption) {
		this.setState({temperature: selectedOption});
	}
	
	_selectTime(selectedOption) {
		this.setState({time: selectedOption});
	}
	
	_saveHandler() {
		this.props.updateRecipe(this.props.recipe.id, this.state.temperature, this.state.time);
	}

	render() {
		return (
			<View>
				<TopBar
					titleName={'Edit ' + this.props.recipe.name}
					leftIcon={'cancel'}
					leftFunc={() => {Actions.pop();}}
					rightIcon={'save'}
					rightFunc={this._saveHandler}
				/>
				<RecipeEditOptions
					defaultTemperature={this.state.temperature}
					defaultTime={this.state.time}
					selectTemperatureFunc={this._selectTemperature}
					selectTimeFunc={this._selectTime}
				/>
			</View>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		recipe: state.recipes[props.recipeID]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateRecipe: (id, temperature, time) => {
			dispatch(updateRecipe(id, temperature, time))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit);
