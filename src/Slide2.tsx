import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

interface State {
  isCollapsed: boolean;
}

export class Slide2 extends Component<{}, State> {
  state = {
    isCollapsed: true,
  };

  showHiddenPart = () =>
    this.setState(state => ({ isCollapsed: !state.isCollapsed }));

  render() {
    const { isCollapsed } = this.state;

    return (
      <>
        <View style={[styles.container, styles.blueContainer]}>
          <TouchableOpacity onPress={this.showHiddenPart}>
            <Text>{isCollapsed ? 'Show' : 'Hide'} hidden part</Text>
          </TouchableOpacity>
        </View>
        <Collapsible collapsed={isCollapsed}>
          <View style={[styles.container, styles.redContainer]}>
            <Text>Hidden part</Text>
          </View>
        </Collapsible>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
  },
  blueContainer: {
    backgroundColor: 'blue',
  },
});
