import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View, AsyncStorage } from 'react-native';


class App extends React.Component {

static input = (value) => {
  try{
    key = Math.random();
    AsyncStorage.setItem(key, JSON.stringify(value));
    return key;
  }
  catch(error){
    return -1;
  }
};
static edit = (key) => {
  try{
    const value = AsyncStorage.getItem(key);
    value = JSON.parse(value);
    value = edtting.save (value);
    AsyncStorage.mergeItem(key, JSON.stringify(this.value));
    return 1;
  }
  catch(error){
    return -1;
  }
};
static delete = (key) => {
  try{
    AsyncStorage.removeItem(key);
    return 1;
  }
  catch(error){
    return -1;
  }
};
static tag = (keys) => {

}
ab ={
  name: 'chris',
  age: 30,
  traits: 'brown'
};
bc = {
  name: 'fame',
  age: 29,
  traits: '20'
};


  render(){
    const inkey = App.input(this.ab);

    return (
      <View>
        <Text>{ inkey }, { App.delete(this.inkey)}</Text>
      </View>

    );
  }
}

export default App