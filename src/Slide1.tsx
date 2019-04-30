import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';

interface Props {
  isLoading: boolean;
  data: number[];
}

export class Slide1 extends Component<Props> {
  render() {
    const { isLoading, data } = this.props;

    if (isLoading) return <ActivityIndicator />;

    return (
      <View>
        {data.map(value => (
          <ListItem value={value} key={value} />
        ))}
      </View>
    );
  }
}
