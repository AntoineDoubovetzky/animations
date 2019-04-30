/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Slide } from './Slide';
import Swiper from 'react-native-swiper';

interface Props {}

interface State {
  data: number[];
  isLoading: boolean;
}

export default class App extends Component<Props, State> {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, data: [0, 1, 2, 3, 4, 5, 6] });
    }, 2000);
  }

  render() {
    const { isLoading, data } = this.state;

    return (
      <Slide>
        <Slide1 isLoading={isLoading} data={data} />
      </Slide>
    );
  }
}

const styles = StyleSheet.create({
  changeSlideButton: {
    position: 'absolute',
    bottom: 5,
  },
});
