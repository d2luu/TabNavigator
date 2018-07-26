import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


export default class DetailComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Detail Screen</Text>
        <Button onPress={() => {
          this.props.navigation.navigate("Setting")
        }}>
          Go to Setting
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});