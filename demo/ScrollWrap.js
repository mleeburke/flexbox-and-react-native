import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';


const deviceWidth = Dimensions.get('window').width;

const widthHalves = deviceWidth/2 - 20;

// Grid layout demo using flexDirection row and flexWrap wrap
export default class ScrollStrange extends Component {



  generateMapArray(number){
    const numbers = [];
    for(let i = 0; i < number; i++){
      numbers.push(i);
    }
    return numbers
  }


  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <View style={styles.grid}>
          {this.generateMapArray(5).map((number, key) =>
            <View key={key} style={styles.smallblock}>
                  <Text style={styles.text}>{number}</Text>
            </View>)
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  smallblock: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    width: widthHalves - 10,
    height: widthHalves,
  },
  grid: {
    flexWrap: 'wrap',
    flexDirection: 'row',

  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  }
});
