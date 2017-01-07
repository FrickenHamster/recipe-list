import { Actions } from 'react-native-router-flux';

import { UPDATE } from './constants';

const initialState = {
	'burgers': {
		id: 'burgers',
		name: 'Burgers',
		ingredients: ['eggs', 'beef', 'pepper'],
		cookMethod: {
			temperature: 300,
			time: 30
		}
	},
	'pizza': {
		id: 'pizza',
		name: 'Pizza',
		ingredients: ['flour', 'tomatoes', 'salt', 'cheese'],
		cookMethod: {
			temperature: 350,
			time: 20
		}
	},
	'fried_chicken': {
		id: 'fried_chicken',
		name: 'Fried Chicken',
		ingredients: ['chicken', 'flour', 'eggs', 'bread crumbs'],
		cookMethod: {
			temperature: 400,
			time: 6
		}
	},
	'boiled_egg': {
		id: 'boiled_egg',
		name: 'Boiled Egg',
		ingredients: ['eggs'],
		cookMethod: {
			temperature: 400,
			time: 7
		}
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE:
			const newState = {};
			Object.assign(newState, state);
			newState[action.payload.recipeID].cookMethod = {
				temperature: action.payload.temperature,
				time: action.payload.time
			};
			Actions.pop({refresh:{recipeID: action.payload.recipeID}});
			return newState;
			break;
		
		default:
			return state;
	}
}

