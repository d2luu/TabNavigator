import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


export default class InfoComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Info Screen</Text>
        <Button onPress={() => {
          this.props.navigation.navigate("Map")
        }}>
          Go to Map
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});