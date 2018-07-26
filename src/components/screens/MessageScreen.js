import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Button from 'react-native-button';


export default class MessageScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>This is Message Screen</Text>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});