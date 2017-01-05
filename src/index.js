import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider } from 'react-redux';

import TopBar from './components/TopBar';
import RecipeMain from './modules/recipe/containers/RecipeMain';

import createStore from './createStore';
const store = createStore();

export default class Main extends Component {

	render() {
		return (
			<Provider store={store}>
				<View>
					<TopBar
						titleName={"My Recipes"}
					/>
					<RecipeMain/>

				</View>
			</Provider>
		)
	}
}

