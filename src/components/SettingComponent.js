import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


export default class SettingComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Setting Screen</Text>
        <Button onPress={() => {
          this.props.navigation.navigate("Info")
        }}>
          Go to Info
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});