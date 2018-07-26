import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-button';


export default class HomeComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
        <Button onPress={() => {
          this.props.navigation.navigate("Detail")
        }}>
          Go to Detail
        </Button>
      </View>
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