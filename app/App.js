import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
// Local imports
import { changeCount } from './actions/counts';
import { globalStyles } from './styles/globalStyles';

class App extends Component {
  constructor(props) {
    super(props);

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    let { count, callCounter } = this.props;
    count++;
    callCounter(count);
  }

  decrementCount() {
    let { count, callCounter } = this.props;
    count--;
    callCounter(count);
  }

  render() {
    const { count } = this.props;
    return (
      <View style={globalStyles.container}>
        <Button title="decrement" onPress={this.decrementCount} />
        <Text style={globalStyles.title}>{count}</Text>
        <Button title="increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  callCounter: (count) => dispatch(changeCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
