import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const widthHalves = deviceWidth/2;

export default class SmallBlock extends Component {
  render() {
    return (
      <View >
        <View style={{ margin: 10, width: widthHalves - 30, height: 180, backgroundColor: 'grey'}} />
      </View>

    );
  }
}
