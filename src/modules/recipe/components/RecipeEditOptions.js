import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback
}  from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

const temperatureOptions = [
	300, 350, 400, 425
];

const timeOptions = [
	20, 30, 60
];

export default class RecipeEditOptions extends Component {

	static propTypes = {
		defaultTemperature: PropTypes.number,
		defaultTime: PropTypes.number,
		selectTemperatureFunc: PropTypes.func,
		selectTimeFunc: PropTypes.func,
	};

	renderTemperatureOption(option, selected, onSelect, index) {
		const style = selected ? {fontWeight: 'bold'} : {};
		const checkIcon = selected ? 'check-circle-o' : 'circle-o';
		return (
			<TouchableWithoutFeedback onPress={onSelect} key={index}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Text style={[styles.optionText, style]}>{option}F   </Text>
					<Icon
						name={checkIcon}
						style={styles.optionText}
					/>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	renderTemperatureContainer(optionNodes) {
		return (<View>
			<Text style={styles.optionTitleText}>Temperature:</Text>
			<View style={{alignItems:"center"}}>
				{optionNodes}
			</View>
		</View>);
	}

	renderTimeOption(option, selected, onSelect, index) {
		const style = selected ? {fontWeight: 'bold'} : {};
		const checkIcon = selected ? 'check-circle-o' : 'circle-o';
		return (
			<TouchableWithoutFeedback onPress={onSelect} key={index}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Text style={[styles.optionText, style]}>{option} min   </Text>
					<Icon
						name={checkIcon}
						style={styles.optionText}
					/>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	renderTimeContainer(optionNodes) {
		return (<View>
			<Text style={styles.optionTitleText}>Time:</Text>
			<View style={{alignItems:"center"}}>
				{optionNodes}
			</View>
		</View>);
	}

	render() {
		return (<View>
			<RadioButtons
				options={temperatureOptions}
				onSelection={(ss)=>{this.props.selectTemperatureFunc(ss)}}
				selectedOption={this.props.defaultTemperature}
				renderOption={this.renderTemperatureOption}
				renderContainer={this.renderTemperatureContainer}
			/>
			<RadioButtons
				options={timeOptions}
				onSelection={(ss)=>{this.props.selectTimeFunc(ss)}}
				selectedOption={this.props.defaultTime}
				renderOption={this.renderTimeOption}
				renderContainer={this.renderTimeContainer}
			/>
		</View>)
	}
}

const styles = StyleSheet.create({
	optionTitleText: {
		color: 'black',
		fontSize: 24
	},
	optionText: {
		color: 'black',
		fontSize: 20,
	}
});


