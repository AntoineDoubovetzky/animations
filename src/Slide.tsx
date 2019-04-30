import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export const Slide = (props: any) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>{props.title}</Text>
    </View>
    <View style={styles.contentContainer}>{props.children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
