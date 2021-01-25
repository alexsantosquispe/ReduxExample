import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from './actions/counts';

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
      <View style={styles.container}>
        <Button title="decrement" onPress={this.decrementCount} />
        <Text style={styles.title}>{count}</Text>
        <Button title="increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  callCounter: (count) => dispatch(changeCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
