import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Circle extends Component {

  render() {
    return (
      <View>
        <View style={{position: 'absolute', top: -50, left: 115, width: 40, height: 40, backgroundColor: 'rgba(91, 91, 91, 0.6)', borderRadius: 20}} />
        <View style={{position: 'absolute', top: -43, left: 122, width: 26, height: 26, borderColor: '#fff', borderWidth: 5, borderRadius: 13}} />
      </View>
    );
  }
}
