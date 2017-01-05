import React, { Component, PropTypes } from 'react';
/*import {
}  from 'react-native';*/
import { connect } from 'react-redux';

import RecipeList from '../components/RecipeList';

const actions = {};

class RecipeMain extends Component {
	
	static propTypes = {
		recipes: PropTypes.array
	};
	
	render() {
		return (
			<RecipeList
				recipes={this.props.recipes}
			/>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipes: Object.keys(state.recipes).map((key, index) => state.recipes[key]
		)
	};
}


export default connect(mapStateToProps, actions)(RecipeMain);
