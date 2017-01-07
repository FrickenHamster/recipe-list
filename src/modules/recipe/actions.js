import { UPDATE } from './constants';

export const updateRecipe = (recipeID, temperature, time) => {
	return {
		type: UPDATE,
		payload: {
			recipeID: recipeID,
			temperature: temperature,
			time: time
		}
	}
};



