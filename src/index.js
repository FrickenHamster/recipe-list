import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

import RecipeMain from './modules/recipe/containers/RecipeMain';
import RecipeShow from './modules/recipe/containers/RecipeShow';
import RecipeEdit from './modules/recipe/containers/RecipeEdit';

import createStore from './createStore';
const store = createStore();

export default class Main extends Component {

	render() {
		return (
			<Provider store={store}>
				<Router>
					<Scene key="root" hideNavBar={true}>
						<Scene key="recipeList" component={RecipeMain} initial={true} />
						<Scene key="recipeShow" component={RecipeShow} />
						<Scene key="recipeEdit" component={RecipeEdit} />
					</Scene>
				</Router>
			</Provider>
		)
	}
}

