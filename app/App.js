import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
// Local imports
import * as Actions from './actions/counts';
import {
  Card,
  CounterCard,
  CustomButton,
  HeaderBar,
  IconCard,
  ResultModal,
  SliderCard
} from './components';
import { globalStyles } from './styles/globalStyles';

class App extends Component {
  constructor(props) {
    super(props);

    this.incrementAge = this.incrementAge.bind(this);
    this.decrementAge = this.decrementAge.bind(this);
    this.incrementWeight = this.incrementWeight.bind(this);
    this.decrementWeight = this.decrementWeight.bind(this);
    this.onHeightValueChanged = this.onHeightValueChanged.bind(this);
    this.onGenderSelected = this.onGenderSelected.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  incrementAge() {
    let { age, onChangeAge } = this.props;
    age++;
    onChangeAge(age);
  }

  decrementAge() {
    let { age, onChangeAge } = this.props;
    age--;
    onChangeAge(age);
  }

  incrementWeight() {
    let { weight, onChangeWeight } = this.props;
    weight++;
    onChangeWeight(weight);
  }

  decrementWeight() {
    let { weight, onChangeWeight } = this.props;
    weight--;
    onChangeWeight(weight);
  }

  onHeightValueChanged(value) {
    let { height, onChangeHeight } = this.props;
    height = Number.parseInt(value);
    onChangeHeight(height);
  }

  onGenderSelected(value) {
    let { gender, onChangeGender } = this.props;
    gender = value;
    onChangeGender(gender);
  }

  toggleModal() {
    console.log('show or hide modal');
  }

  render() {
    const { age, weight, height } = this.props;

    return (
      <View style={globalStyles.page}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <HeaderBar title="BMI Calculator" />
        <View style={globalStyles.container}>
          {/* Age and weight */}
          <View style={globalStyles.row}>
            <CounterCard
              title="Age"
              value={age}
              onIncrement={this.incrementAge}
              onDecrement={this.decrementAge}
            />
            <CounterCard
              title="Weight (Kg)"
              value={weight}
              onIncrement={this.incrementWeight}
              onDecrement={this.decrementWeight}
            />
          </View>
          {/* Height */}
          <View style={globalStyles.row}>
            <SliderCard
              title="Height (cm)"
              initValue={height}
              value={height}
              onChangeValue={this.onHeightValueChanged}
            />
          </View>
          {/* Gender section */}
          <View style={globalStyles.row}>
            <IconCard
              title="Female"
              value="female"
              iconName="venus"
              onChangeValue={this.onGenderSelected}
            />
            <IconCard
              title="Male"
              value="male"
              iconName="mars"
              onChangeValue={this.onGenderSelected}
            />
          </View>
          {/* Button calculate */}
          <View style={globalStyles.row}>
            <CustomButton
              title="CALCULATE"
              icon="heart"
              onPressHandler={this.toggleModal}
            />
          </View>
        </View>
        {/* <ResultModal isVisible={isModalVisible} /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    age,
    weight,
    height,
    gender,
    bmiResult,
    isModalVisible
  } = state.counterReducer;
  return {
    age,
    weight,
    height,
    gender,
    bmiResult,
    isModalVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeAge: (age) => dispatch(Actions.changeAge(age)),
  onChangeWeight: (weight) => dispatch(Actions.changeWeigth(weight)),
  onChangeHeight: (height) => dispatch(Actions.changeHeight(height)),
  onChangeGender: (gender) => dispatch(Actions.genderChanged(gender)),
  getBMIResult: () => dispatch(Actions.getBMIResult()),
  changeModalVisibility: (value) =>
    dispatch(Actions.changeModalVisibility(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
