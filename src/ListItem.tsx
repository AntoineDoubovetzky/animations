import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Props {
  value: number;
}

export default class ListItem extends Component<Props> {
  render() {
    const { value } = this.props;
    return (
      <Animatable.View animation='fadeIn' delay={value * 500}>
        <View style={styles.container}>
          <Text>{value}</Text>
        </View>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
