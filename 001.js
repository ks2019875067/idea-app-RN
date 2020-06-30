import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
	   return (
    	 <View style={styles.container}>
          <View style = {{ width: 100, height: 100, backgroundColor: 'red'}} />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'white',
  },
})
