import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'react-thunk';

import recipe from './modules/recipe/index';

const middleware = applyMiddleware(thunk);

const initialState = {
	recipes: [
		{
			name: 'Burgers',
			ingredients: ['eggs', 'beef', 'pepper'],
			cookMethod: {
				temperature: 300,
				time: 30
			}
		},
		{
			name: 'Pizza',
			ingredients: ['flour', 'tomatoes', 'salt', 'cheese'],
			cookMethod: {
				temperature: 350,
				time: 20
			}
		},
		{
			name: 'Fried Chicken',
			ingredients: ['chicken', 'flour', 'eggs', 'bread crumbs'],
			cookMethod: {
				temperature: 400,
				time: 6
			}
		},
		{
			name: 'Boiled Egg',
			ingredients: ['eggs'],
			cookMethod: {
				temperature: 400,
				time: 7
			}
		}
	]
};

export default (state = initialState) => {
	const rootReducer = combineReducers({
		recipes: recipe.reducers
	});
	
	return createStore(rootReducer);
}
