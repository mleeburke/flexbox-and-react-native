import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions, Image } from 'react-native';
import { Components } from 'expo';

import PinterestUI from './demo/PinterestUI';
import BorderBasic from './demo/BorderBasic';
import ScrollWrap from './demo/ScrollWrap';
import ListDoneRight from './demo/ListDoneRight';

//Uncomment the components below one at a time to see each demo.

export default class App extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />

        <BorderBasic />

        {/* <PinterestUI /> */}

        {/* <ScrollWrap /> */}

        {/* <ListDoneRight /> */}

      </View>
    )
  }
}

Expo.registerRootComponent(App)
