
const initialState = {
	'burgers': {
		name: 'Burgers',
		ingredients: ['eggs', 'beef', 'pepper'],
		cookMethod: {
			temperature: 300,
			time: 30
		}
	},
	'pizza': {
		name: 'Pizza',
		ingredients: ['flour', 'tomatoes', 'salt', 'cheese'],
		cookMethod: {
			temperature: 350,
			time: 20
		}
	},
	'fried chicken': {
		name: 'Fried Chicken',
		ingredients: ['chicken', 'flour', 'eggs', 'bread crumbs'],
		cookMethod: {
			temperature: 400,
			time: 6
		}
	},
	'boiled egg': {
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
		default:
			return state;
	}
}

