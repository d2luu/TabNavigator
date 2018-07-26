import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


export default class MapComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Check in here</Text>
        <Button onPress={() => {
          this.props.navigation.navigate("Home")
        }}>
          Go to home
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});